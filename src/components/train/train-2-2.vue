<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, UploadFile, UploadFiles, UploadInstance } from 'element-plus'
import { read, utils } from 'xlsx'
import axios from 'axios';

const uploadRef = ref<UploadInstance>()
const inputModel = ref('')
const getData = (url: string) => {
    try {
        axios.post(url).then(response => (console.log(response)))
    } catch {
        console.log('e')
    }

}

type RowData = {
    url_1: string,
    url_2: string,
    url_3: string,
    nickName: string,
    title: string,
}

type PersonData = {
    name: string,
    data: RowData[]
}


const fileList: UploadFile[] = []

const data = ref<PersonData[]>([])



const onChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {

    var isCanAdd = true

    for (const item of fileList) {
        if (uploadFile.name == item.name) {
            isCanAdd = false
        }
    }

    if (isCanAdd) {
        fileList.push(uploadFile)
    }


}

const submitUpload = () => {
    //添加的代码
    const sheetOption = {
        /** Default value for null/undefined values */
        defval: ''//给defval赋值为空的字符串
    }
    if (fileList.length > 0) {
        for (const item of fileList) {
            if (item.raw !== null) {
                /// 单个表格的总数居
                /// 一个表格可能有多个sheet
                /// 一个sheet会有很多行数据
                /// 单个表格的数据就是把所有sheet的行数据放到一起
                const sheetData: PersonData = { name: item.name, data: [] }

                const fileReader = new FileReader() // 开始读取文件

                fileReader.readAsBinaryString(item.raw!)
                fileReader.onload = (ev) => {

                    if (ev.target !== null) {
                        let result = ev.target.result

                        const workbook = read(result, { type: 'binary' })

                        for (const sheetName of workbook.SheetNames) {
                            let concat = [].concat(utils.sheet_to_json(workbook.Sheets[sheetName], sheetOption))
                            for (const row of concat) {
                                let rowDataList: never[] = []
                                // v是读取单元格的原始值
                                for (const key in row) {
                                    rowDataList.push(row[key])
                                }
                                let rowData: RowData = {
                                    url_1: rowDataList[0],
                                    url_2: rowDataList[1],
                                    url_3: rowDataList[2],
                                    nickName: rowDataList[3],
                                    title: rowDataList[4],
                                }
                                if (!sheetData.data.includes(rowData)) {
                                    sheetData.data.push(rowData)
                                }

                            }
                        }
                    }

                    var isCanPush = true

                    for (const itemDataValue of data.value) {
                        if (itemDataValue.name === sheetData.name) isCanPush = false
                    }

                    if (isCanPush) data.value.push(sheetData)

                }
            }
        }
    } else {
        ElMessage.error('请上传文件, 不上传文件我怎么处理呢')
    }
}
</script>
<template>
    <el-upload ref="uploadRef" class="upload-demo" action="" :auto-upload="false" :multiple="true" :on-change="onChange"
        :accpect="'.xlsx,.xlx'">
        <template #trigger>
            <el-button type="primary">select file</el-button>
        </template>

        <el-button class="el-button-up" type="success" @click="submitUpload">
            upload to server
        </el-button>

        <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
            </div>
        </template>
    </el-upload>


    <div class="crawler flex-box row-between-center">
        <el-input v-model="inputModel" placeholder="输入爬取的地址"></el-input>
        <el-button class="el-button-up" type="success" @click="getData(inputModel)">爬取</el-button>
    </div>

    <div :key="index" v-for="(item, index) in data">
        <div>{{ item.name }}</div>
        <a :key="indexChild" v-for="(itemChild, indexChild) in item.data" target="_bank" :href="itemChild.url_1">{{
            itemChild.url_1
        }}</a>
    </div>
</template>

<style scoped>
.el-button-up {
    margin-left: 1rem;
}

a {
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>

  
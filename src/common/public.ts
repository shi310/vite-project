import { ref } from "vue"

// 插入代码块
import prism from "prismjs";

export const isPhone = ref(false)
export const phoneWidth: number = 800

window.onresize = () => {
    isPhone.value = window.innerWidth < phoneWidth ? true : false
}

export const jsCodeLight = (code: string) => {
    return prism.highlight(code, prism.languages.javascript, 'javascript');
};

export const htmlCodeLight = (code: string) => {
    return prism.highlight(code, prism.languages.html, 'html');
};

export const cssCodeLight = (code: string) => {
    return prism.highlight(code, prism.languages.css, 'css');
};

export const pythonCodeLight = (code: string) => {
    return prism.highlight(code, prism.languages.python, 'python');
};





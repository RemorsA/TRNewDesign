export default function routerGo(path) {
    let tagA = document.createElement('a')
// ДЛЯ GITHUB PAGES -> /TRNewDesign - ПОЗЖЕ УДАЛИТЬ
    tagA.setAttribute('href', '/TRNewDesign' + path)
    tagA.click()
}
//myCode
//nasralNastol

class Model {
    tasks;

    get tasks() {
        return JSON.parse(JSON.stringify(this.tasks));
    }

    saveTask(task) {

    }

    updateTask(taskId, task) {

    }

    deleteTask(taskId) {

    }

    clearData() {

    }

    saveDataToLocalStorage() {

    }

    constructor() {
        this.tasks = [];
    }
}

class Controller {
    createTask(taskData) {
        // делаем лоигку по валиадции данных, создаем айдишники и тп
        view.renderTask(taskData)
        model.saveTask(taskData)
    }

    deleteTask(taskId) {
        view.removeTask(taskId)
        model.deleteTask(taskId)
    }

    clearAllTasks() {
        view.removeAllTasks();
        model.clearData();
    }
}

class View {
    renderTask(taskData) {
        this.createTaskMainNode(this.createCheckbox(), this.createDeleteRecordButton());
    }

    createTaskMainNode(checkbox, deleteButton) {
        // создаем ноду, навешиваем стили и тп
        this.appendTaskToView();
    }

    renderAllTasks(tasks) {
        tasks.forEach(task => this.renderTask())
    }

    removeTask(taskId) {

    }

    removeAllTasks() {

    }

    appendTaskToView(taskNode) {

    }

    createCheckbox() {

    }

    addCheckboxHandle() {

    }

    createDeleteRecordButton() {

    }

    addDeleteButtonHandler() {

    }

}

const model = new Model();
const controller = new Controller();
const view = new View();

let createButton = document.getElementById('create_button');
let input = document.getElementById('taskText');

document.addEventListener('DOMContentLoaded', () => {
    let createButton = document.getElementById('create_button');
    let input = document.getElementById('taskText');
})
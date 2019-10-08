const app = new Vue({
    el: '#app',
    name: 'ToDo List SØREN',
    data: {
        dataItem: {Title: '', Status: false},
        dataList: [
            {Id: 1, Title: 'Work 1', Status: true, List: 'Work'},
            {Id: 2, Title: 'Work 2', Status: false, List: 'Work'},
            {Id: 3, Title: 'Work 3', Status: false, List: 'Work'},
            {Id: 4, Title: 'Personal 1', Status: true, List: 'Personal'},
            {Id: 5, Title: 'Personal 2', Status: false, List: 'Personal'},
            {Id: 6, Title: 'General 1', Status: false, List: 'General'},
        ],
        listItems: [
            {Id: 1, Title: 'General'},
            {Id: 2, Title: 'Work'},
            {Id: 3, Title: 'Personal'}
        ],
        activeListItem: {},
        filteredDataList:[],
        newListItem: {}
    },
    created() {
        const defaultListItem = this.listItems[0];
        if (defaultListItem != null)
            this.changeListItem(defaultListItem.Id);

    },
    methods: {
        toggleTodoListStatus(index) {
            this.todoList[index].Status = !this.todoList[index].Status;
        },
        toggleTodoListDoneStatus(index) {
            this.todoListDone[index].Status = !this.todoListDone[index].Status;
        },
        saveItem() {
            if (this.dataItem.Title !== '') {
                this.dataItem.Id = this.dataList.length + 1;
                this.dataItem.List = this.activeListItem.Title;
                this.dataList.push(this.dataItem);
                this.clearForm();
                this.changeListItem(this.activeListItem.Id);
            }
        },
        clearForm() {
            this.dataItem = {Title: '', Status: false};
        },
        deleteItem(id) {
            this.dataList = this.dataList.filter(todo => todo.Id !== id);
        },
        changeListItem(id) {
            const listItem = this.listItems.find(list => list.Id === id);
            if (listItem != null) {
                this.activeListItem = listItem;
                this.filteredDataList = this.dataList.filter(item => item.List === listItem.Title);

            }
        },
        listItemSave(){
            if (this.newListItem.Title != null) {
                this.newListItem.Id = this.listItems.length + 1;
                this.listItems.push(this.newListItem);
                this.newListItem = {};
            }
        },
        listItemCount(title){
            return this.dataList.filter(item => item.List === title).length;
        }
    },
    computed: {
        todoList() {
            return this.filteredDataList.filter(todo => todo.Status === false);
        },
        todoListDone() {
            return this.filteredDataList.filter(todo => todo.Status === true);
        }
    }
})
const app = new Vue({
    el: '#app',
    name: 'Vue Js',
    data: {
        mesaj: 'Vue Js First Message',
        activeUser: {},
        users: [
            {
                id: 1,
                name: 'Kaan',
                role: 'Admin'
            },
            {
                id: 2,
                name: 'Kaan2',
                role: 'Admin'
            },
            {
                id: 3,
                name: 'Kaan3',
                role: 'Admin'
            }
        ]
    },
    methods: {
        newUser() {
            this.activeUser = {role: ""};
            $('#userModal').modal('show');
        },
        saveUser() {
            if (this.activeUser.name != undefined && this.activeUser.role != '') {

                if (this.activeUser.id > 0){
                    let user = this.users.find(x => x.id == this.activeUser.id);
                    user = this.activeUser;
                }else
                {
                    this.users.push({
                        id: this.users.length + 1,
                        name: this.activeUser.name,
                        role: this.activeUser.role
                    });
                }
                this.activeUser = {};
                $('#userModal').modal('hide');
            }
        },
        deleteUser(index){
            this.users.splice(index,1);
        },
        updateUser(index){
            this.activeUser = this.users[index];
            $('#userModal').modal('show');
        },
    }

})
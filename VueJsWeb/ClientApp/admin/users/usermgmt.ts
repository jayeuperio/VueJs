import Vue from 'vue';
import Component from 'vue-class-component';
import { IUser, UserRoles } from '../../models/user';

@Component
export class UserManagement extends Vue {
    users: IUser[] = [];

    mounted() {

    }
}
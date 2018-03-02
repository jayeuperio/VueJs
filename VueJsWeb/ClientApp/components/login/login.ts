import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { authService } from '../../services/authservice';
import { ICredentials, IAuthResult } from '../../models/auth';

@Component
export default class Login extends Vue {
    credentials: ICredentials = { userName: '', password: '' };

    login() {
        authService.authenticate(this.credentials).then(response => {

            if (!response.is_error) {

            }

        });
    }
}
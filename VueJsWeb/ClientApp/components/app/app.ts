import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component(
    {
        data: () => ({
            drawer: false,
            drawerRight: false,
            right: null,
            left: null
        }),
        props: {
            source: String
        }
    }
)
export default class AppComponent extends Vue {

}

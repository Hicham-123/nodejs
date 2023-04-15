import { defineStore } from "pinia"
import useLocation from '../services/location'
const { addlocation,getpricelocation,checklocation,getlocation,getalllocation } = useLocation()

export const useLocationStore = defineStore('location', {
    state: () => ({
        location: {},
        locations: []
    }),
    getters: {
    },
    actions: {
        async Delete()
        {
            this.location = {};
            this.locations = [];
        },
        async AddLocation(token,data) {
            try {
                const result = await addlocation(token,data)
                return result

            } catch (error) {
                console.log('login error', error)
            }
        },

        async GetPrice(token,data) {
            try {
                const result = await getpricelocation(token,data)
                return result;
            } catch (error) {
                console.log('login error', error)
            }
        },

        async CheckLocation(token,data) {
            try {
                const result = await checklocation(token,data)
                return result

            } catch (error) {
                console.log('register error', error)
            }

        },

        async GetLocation(token,id) {
            try {
                const result = await getlocation(token,id)
                return result

            } catch (error) {
                console.log('register error', error)
            }

        },
        async allLocation(token,id) {
            try {
                const result = await getalllocation(token,id)
                this.locations = result.data;
                return result.data

            } catch (error) {
                console.log('register error', error)
            }

        },
    }
})
import { defineStore } from "pinia"
import useVoiture from '../services/voiture'
const { addcar,getcar,getallcar,deletecar } = useVoiture()

export const useVoitureStore = defineStore('car', {
    state: () => ({
        car: {},
        cars: []
    }),
    getters: {
        carList(state) {
            return state.cars
        },
        currentcar(state) {
            return state.car
        },
    },
    actions: {
        async Delete()
        {
            this.car = {};
            this.cars = [];
        },

        async carbyid(id) {
            try {
                const result = await getcar(id)
                this.car = result.data;
                return result

            } catch (error) {
                console.log('login error', error)
            }
        },

        async allcar() {
            try {
                const result = await getallcar()
                this.cars = result.data;
                return result
            } catch (error) {
                console.log('login error', error)
            }
        },

        async AddCar(token,data) {
            try {
                const result = await addcar(token,data)
                return result

            } catch (error) {
                console.log('register error', error)
            }

        },

        async DeleteCar(token,data) {
            try {
                const result = await deletecar(token,data)
                return result

            } catch (error) {
                console.log('register error', error)
            }

        },
    }
})
<template lang="">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <div style="display:flex;justify-content: space-between;">
                <h5 class="card-title"> {{ test2 }} </h5>
                <button type="button" class="btn btn-danger" @click="test(this.test2)"
                    style="margin-left:0px !important;margin-right:0px !important;margin-top:0px !important;">X</button>

            </div>
                <div>
                    <label>test1</label>
                    <input type="text">
                </div>
                <div>
                    <input type="checkbox" id="scales" name="scales" checked>
                    <label for="scales">lunid</label>
                    <input type="checkbox" id="scales" name="scales">
                    <label for="scales">mardi</label>
                    <input type="checkbox" id="scales" name="scales">
                    <label for="scales">mercredi</label>
                    <input type="checkbox" id="scales" name="scales">
                    <label for="scales">jeudi</label>
                    <input type="checkbox" id="scales" name="scales">
                    <label for="scales">vendredi</label>
                </div>
                <div>
                    <label>test1</label>
                    <input type="number">
                </div>
                <div>
                    <input type="checkbox" id="scales" name="scales" checked>
                    <label for="scales">AM</label>
                    <input type="checkbox" id="scales" name="scales">
                    <label for="scales">PM</label>
                </div>

                <div>
                    <label for="pet-select">Choose a pet:</label>

                    <select id="pet-select">
                        <option value="">--Please choose an option--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select>
                </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'addTask',
    props:['test2'] ,
    components: {
      
    },
    data() {},
    methods: {
    test(palu){
        console.log(palu)
        document.getElementById("task"+palu).remove()
      },
      deleteTask(){
        document.getElementById("task1").remove()
      },
    }
}
</script>
<style lang="">
    
</style>
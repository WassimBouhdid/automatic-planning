<template lang="">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <div style="display:flex;justify-content: space-between;">
            <h5 class="card-title">Card title</h5>
            <button type="button" class="btn btn-danger" @click="test()" style="margin-left:0px !important;margin-right:0px !important;margin-top:0px !important;">X</button>

        </div>
            <form>
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
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'addTask',
    components: {
      
    },
    data() {},
    methods: {
    test(){
        document.getElementById("task1").remove()
      },
      deleteTask(){
        document.getElementById("task1").remove()
      },
    }
}
</script>
<style lang="">
    
</style>
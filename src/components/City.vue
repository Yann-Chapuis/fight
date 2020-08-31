<template>
      <div class="container-fluid">
        <h1 class="mt-4">Stats</h1>
        <div class="row">
          <div class="col-lg-4">
            <span>Points disponibles : 5</span>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>Force :</td>
                    <td>{{force}}</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                  </tr>
                  <tr>
                    <td>Adresse :</td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                  </tr>
                  <tr>
                    <td>Agilité :</td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                  </tr>
                  <tr>
                    <td>Constitution :</td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                  </tr>
                  <tr>
                    <td>Charisme :</td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                  </tr>
                  <tr>
                    <td>Attaque :</td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                  </tr>
                  <tr>
                    <td>Défense :</td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                  </tr>
                </tbody>
              </table>
          </div>

<stats-div
  v-for="stat in stats"
  v-bind:key="stat.id"
  v-bind:title="stat.title"
>a {{ stat.title }}</stats-div>


          <div class="col-lg-8">
            <span>Vie :</span>
            <div class="progress">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100/100 PV</div>
            </div>
            <span>Expérience :</span> 
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 20%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100/500 expérience</div>
            </div>
            <span>Or : 8476</span><br>

          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>


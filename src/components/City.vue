<template>
      <div class="container-fluid">
        <h1 class="mt-4">Stats</h1>
        <div class="row">
          <div class="col-lg-4">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td><img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-city" alt="">Forteresse +300/heure <span class="text-success">(+60/h)</span></td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                    <td><img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 <img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 </td>
                  </tr>
                  <tr>
                    <td><img v-bind:src="'/icons/nobg/habitation.png'" class="icons-city" alt="">Habitation +300/heure <span class="text-success">(+60/h)</span></td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                    <td><img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 <img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 </td>
                  </tr>
                  <tr>
                    <td><img v-bind:src="'/icons/nobg/ferme.png'" class="icons-city" alt="">Ferme +300/heure <span class="text-success">(+60/h)</span></td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                    <td><img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 <img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 </td>
                  </tr>
                  <tr>
                    <td><img v-bind:src="'/icons/nobg/bucheron.png'" class="icons-city" alt="">Bucheron +300/heure <span class="text-success">(+60/h)</span></td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                    <td><img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 <img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 </td>
                  </tr>
                  <tr>
                    <td><img v-bind:src="'/icons/nobg/mine.png'" class="icons-city" alt="">Mine de pierre +300/heure <span class="text-success">(+60/h)</span></td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                    <td><img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 <img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 </td>
                  </tr>
                  <tr>
                    <td><img v-bind:src="'/icons/nobg/tannerie.png'" class="icons-city" alt="">Tannerie +300/heure <span class="text-success">(+60/h)</span></td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                    <td><img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 <img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 </td>
                  </tr>
                  <tr>
                    <td><img v-bind:src="'/icons/nobg/caserne.png'" class="icons-city" alt="">Caserne +300/heure <span class="text-success">(+60/h)</span></td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                    <td><img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 <img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 </td>
                  </tr>
                  <tr>
                    <td><img v-bind:src="'/icons/nobg/archerie.png'" class="icons-city" alt="">Archerie +300/heure <span class="text-success">(+60/h)</span></td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                    <td><img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 <img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 </td>
                  </tr>
                  <tr>
                    <td><img v-bind:src="'/icons/nobg/ecurie.png'" class="icons-city" alt="">Ecurie +300/heure <span class="text-success">(+60/h)</span></td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                    <td><img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 <img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 </td>
                  </tr>
                  <tr>
                    <td><img v-bind:src="'/icons/nobg/atelier_de_siege.png'" class="icons-city" alt="">Atelier de siège +300/heure <span class="text-success">(+60/h)</span></td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">+</button></td>
                    <td><img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 <img v-bind:src="'/icons/nobg/forteresse.png'" class="icons-top" alt="">1150 </td>
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


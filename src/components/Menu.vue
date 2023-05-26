<template>
    <div class="menu">
    <router-link :to="{ name: 'baudelaire' }"  class="element pink">
      <div class="title">
        Baudelaire
      </div>
      <div class="subtitle">
        Compétences :
      </div>
      <li>dessin numérique</li>
      <div class="subtitle">
        Logiciels :
      </div>
      <li>photoshop</li>
      <li>in design</li>
    </router-link>
    <router-link :to="{ name: 'bequignol' }" class="element grey">
      <div class="title">
        Béquignol
      </div>
      <div class="subtitle">
        Compétences :
      </div>
      <li>Travail d’équipe</li>
      <div class="subtitle">
        Logiciels :
      </div>
      <li>illustrator</li>
      <li>in design</li>
    </router-link>
    <router-link :to="{ name: 'fanzine' }" class="element green">
      <div class="title">
        Fanzine
      </div>
      <div class="subtitle">
        Compétences :
      </div>
      <li>créativité</li>
      <li>sérigraphie</li>
      <li>linogravure</li>
      <div class="subtitle">
        Logiciels :
      </div>
      <li>photoshop</li>
      <li>in design</li>
    </router-link>

    <router-link :to="{ name: 'photographie' }" class="element pink2">
      <div class="title">
        Photographies
      </div>
      <div class="subtitle">
        Compétences :
      </div>
      <li>Photographie</li>
      <li>Retouche photos</li>
    </router-link>
    <router-link :to="{ name: 'harmonie' }" class="element blue">
      <div class="title">
        Harmonie de Christus
      </div>
      <div class="subtitle">
        Compétences :
      </div>
      <li>développer une identité graphique</li>
      <div class="subtitle">
        Logiciels :
      </div>
      <li>illustrator</li>
      <li>in design</li>
      <li>photoshop</li>
      <li>after effect</li>
    </router-link>
  </div>
</template>
const container = document.getElementById('container');


fetch("assets/Modules/albumItems.json")
  .then((response) => response.json())
  .then((response) => {
    response.data.forEach((card) => {

      // Construct card content
      const content = `  
  <div class="Card">           
  
  <div class="Card-Pictures" style="background-image: url(${card.picture})"></div>
  
  <div class="Card-Gender">
    ${card.genre.map(function (cequejeveux) {
        return `<span class = "genre ${cequejeveux}"> ${cequejeveux} </span>`;
      }).join(" ")}
  </div>
  <div class="Card-Title">
      <p>Album :  ${card.name}</p>
     
  </div>
  <div class="Card-Artiste">
      <p>Artiste : ${card.artiste}</P>
  </div>

  <div class="Card-Description">

      <p> ${card.Describtion}</p>

      <p>Date de sortie : ${card.releaseDate}</p>
  </div>
  <div class="Card-link">
  
  <a href="${card.YTB}" target="_blank"><img src="assets/Pictures/YTB.png" alt="Youtube logo" width="85px"></a>
  
  </div>
  </div>`;

      // Append newyly created card element to the container

      container.insertAdjacentHTML("beforeend", content);

    })
  })


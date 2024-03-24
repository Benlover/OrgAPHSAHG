import React from 'react'
import { IoEye } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
function Welcome() {
  return (
    
    <section>
      
        <div className='px-24 bg-[#f3f2ee] bg-opacity-100'>

            <h1 className='pt-6 text-center text-4xl'>Presentation de l'APHSAGH</h1>
                <p className='pt-6 font-normal text-gray-700 dark:text-gray-40 '>
              Poussé par l'envie de contribuer au développement,
              de supporter un bon nombre d'enfants démunis 
              et de porter une main forte à la crise actuelle 
              en Haïti, un groupe de jeunes professionnels qui ont 
              l'habitude d'être bénévoles dans différentes activités 
              sociales et culturelles ont décidés de se regrouper pour 
              supporter activement les enfants démunis dans le 
              pays dans le domaine éducatif et sanitaire suivant l'article 
              31 de la constitution de 1987 qui stipule que les gens sont 
              libres de se grouper en association, club ou organisation, 
              une fois qu'ils ne troublent pas la paix publique. Ainsi, le 
              <b>07 Août 2018</b> nous avons décidé de créer cette 
              association pour trouver des alternatives permettant de 
              combattre les troubles socio-économiques, culturels et 
              environnementaux , qui sont la cause d'une enfance raté de 
              bon nombre d'enfants démunis. Depuis lors, nous nous engagés 
              dans cette mission avec une vision bien déterminée pour 
              atteindre notre objectif. 
            </p>
        </div>
        <div className='r'>

        </div>
            <div className="container-mission">
                <div className="mission-content">
                  <h2>MISSION</h2>
                  <p className="description">
                    Apporter des soutiens sanitaires, éducatifs et 
                    sociaux aux enfants les plus démunis du pays.
                  </p>
                    <div className="mission-icon">
                    <IoAccessibility name="accessibility"/>
                  </div>
              </div>
              <div className="mission-content">
                  <h2>VISION</h2>
                  <p className="description">
                    Favoriser et garantir le soin sanitaire et 
                    l'éducation sociale des enfants et des familles 
                    démunis.
                  </p>
                  <div className="mission-icon">
                  <IoEye name="eye"/>
                  
                  </div>
              </div>
          </div>
         
          <div className='px-24 bg-[#f3f2ee] bg-opacity-100 bg-[url(/assets/carte_haiti.jpeg)] min-h-[40vh] bg-no-repeat bg-fixed bg-cover'>
          <h2 className='pt-6 text-center text-4xl'>Situation géographie</h2>
              <h4 className='text-2xl'>Siège social: Ouanaminthe</h4>
              <p className='pt-6 font-normal text-gray-800 dark:text-gray-40 '>
                Ouanaminthe est un arrondissement du Nord-Est 
                d'Haïti qui comprends 3 communes (Ouanaminthe, 
                Capotille et Mont-Organisé). Elle est une ville 
                frontalière entre la République Dominicaine et
                la République d'Haïti. La ville Ouanaminthe est bordée 
                au nord par la commune de Ferrier, à l'est par la ville dominicaine 
                Dajabòn et la commune capotille, au sud par la commune 
                de Mont-organisé et à l'ouest par la ville de Fort-liberté. 
                Ouanaminthe compte 5 sections communales et un quartier. 
                La topographie se compose principalement de plaines et d'un climat 
                chaud. La population de cette commune est estimé à 106 129 
                habitants par une projection du recensement de 2015.
              </p> 
         
          </div>
          <div className='r'>

          </div>
          <div className='px-24 bg-[#f3f2ee] bg-opacity-100'>
          <h2 className='pt-6 text-center text-4xl'>Situation socio-économique</h2>
            <p className='pt-6 font-normal text-gray-700 dark:text-gray-40 '>
              Poussé par l'envie de contribuer au développement,
              de supporter un bon nombre d'enfants démunis 
              et de porter une main forte à la crise actuelle 
              en Haïti, un groupe de jeunes professionnels qui ont 
              l'habitude d'être bénévoles dans différentes activités 
              sociales et culturelles ont décidés de se regrouper pour 
              supporter activement les enfants les enfants démunis dans le 
              pays dans le domaine éducatif et sanitaire suivant l'article 
              31 de la constitution de 1987 qui stipule que les gens sont 
              libres de se grouper en association, club ou organisation, 
              une fois qu'ils ne troublent pas la paix publique. Ainsi, le 
              <b>07 Août 2018</b> nous avons décidé de créer cette 
              association pour trouver des alternatives permettant de 
              combattre les troubles socio-économiques, culturels et 
              environnementaux , qui sont la cause d'une enfance raté de 
              bon nombre d'enfants démunis. Depuis lors, nous nous engagés 
              dans cette mission avec une vision bien déterminée pour 
              atteindre notre objectif. 
            </p>
          </div>
          <hr />
          
    </section>
        
  )
}

export default Welcome
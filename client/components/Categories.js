import CategoryContainer from './helpersComponent/CategoryContainer'

import controllo from '../images/controllo-e-prevenzione.jpg'
import cura from '../images/cura-e-bellezza.jpg'
import igiene from '../images/igiene-e-benessere.jpg'

const Categories = () => {
  return (
    <div className='categories'>
      <span className='overtitle'>SCELTI PER TE DA OLIVIA</span>
      <h2 className='title-section'>TUTTO QUELLO DI CUI HAI BISOGNO</h2>
      <p className='description-section'>Per ogni giorno, per ogni bisogno che avrai scegliamo i prodotti migliori che ti aiutino a sentirti bene.</p>
      <div className='categories-container'>
        <CategoryContainer img={cura} title='Cura e Bellezza' link='cura-e-bellezza' />
        <CategoryContainer img={controllo} title='Controllo e Prevenzione' link='controllo-e-prevenzione' />
        <CategoryContainer img={igiene} title='Igiene e Benessere' link='igiene-e-benessere' />
      </div>

      <style jsx>{`
          .categories {
              text-align: center;
              padding: 80px 10px;
              background-color: #f4f4f2
          }
          .categories .divider {
             margin: 0 auto 30px
          }

          @media(min-width: 968px){
            .categories {
              position: relative;
              bottom: 280px;
              z-index: 0;
              padding-top: 130px;
              padding-bottom: 80px

            }
              .categories-container {
                  display: flex;
                  flex-wrap: wrap;
                  margin: 0 80px
              }
              .description-section {
                width: 50vw;
                margin: 0 auto 40px
              }
          }    
      `}
      </style>
    </div>
  )
}

export default Categories

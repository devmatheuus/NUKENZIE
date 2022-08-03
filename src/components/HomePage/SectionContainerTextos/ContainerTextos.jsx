import './SectionContainerTextos.css'

const SectionContainerTextos = ({setClick}) =>{
 
  const change = () => setClick(false)

  return(
   <section className="SectionContainerTextos">
   
    <div className='LogoHome'>
      <h2 className='oneSubTituloHome'>Nu</h2>
      <h2 className='subTituloHome'>Kenzie</h2>
    </div>
   
    <h1 className='tituloHome'> Centralize o controle das suas finanças </h1>
    <p className='paragrafoHome'>De forma rápida e segura</p>
    <button className='buttonHome' onClick={change}>Iniciar</button>

  </section>
  )
}
export default SectionContainerTextos
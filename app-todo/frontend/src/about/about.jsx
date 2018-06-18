import React, { Component } from 'react'
import PageHeader from '../template/page-header'

export default class About extends Component{
    render(){
        return(
            <div>
                <PageHeader name="Nossos" small="valores"/>
                <p>
                   Podemos acreditar que tudo que a vida nos oferecerá no futuro é repetir o que fizemos ontem e hoje. Mas, se prestarmos atenção, vamos nos dar conta de que nenhum dia é igual a outro. Cada manhã traz uma benção escondida; uma benção que só serve para esse dia e que não se pode guardar nem desaproveitar.
                   Se não usamos este milagre hoje, ele vai se perder.
                   <br/>Este milagre está nos detalhes do cotidiano; é preciso viver cada minuto porque ali encontramos a saída de nossas confusões, a alegria de nossos bons momentos, a pista correta para a decisão que tomaremos.
                   <br/>Nunca podemos deixar que cada dia pareça igual ao anterior porque todos os dias são diferentes, porque estamos em constante processo de mudança.
                </p>
            </div>
        )
    }
}

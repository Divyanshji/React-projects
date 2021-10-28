import React from 'react'

function Ninjas({ninjas, deleteNinja}) {
    // console.log(props);
    // const { name, belt }=props
    // const { ninjas }= props;
    const ninjaList = ninjas.map(ninja => {        
        return(
          <div>
            <ul className='ninja' type='circle' key={ninja.id}>
            <li>Im there for you</li>
            <li>Just joking</li>
            <li>{ ninja.name }</li>
            <li>{ ninja.age }</li>
            <li>{ ninja.belt }</li>
        </ul>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
        </div>
        )
    })
    // const ninjaList = ninjas.map(ninja => {
        
    //     return ninja.age<20 ?(
    //         <ul className='ninja' type='circle' key={ninja.id}>
    //         <li>Im there for you</li>
    //         <li>Just joking</li>
    //         <li>{ ninja.name }</li>
    //         <li>{ ninja.age }</li>
    //         <li>{ ninja.belt }</li>
    //     </ul>
    //     ) :null
    //     }
    // )

    return (
      <div className="ninja-list">
        <h1>Hey There NINJAS</h1>
        { ninjaList }
      </div>
    );
  }
  export default Ninjas;
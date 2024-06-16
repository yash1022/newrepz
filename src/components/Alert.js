import React from 'react'

export default function alert(props) {
  return (

     props.txt &&<div class="alert alert-warning alert-dismissible fade show" role="alert">
     {props.txt}
 
</div>
  )


}

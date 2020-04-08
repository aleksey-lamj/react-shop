import React from 'react'
import ShopListContainer from '../shop-list/shop-list'
import { withRouter } from 'react-router-dom'


const AllItems = ({history}) => {
return <ShopListContainer  showInfo={(category, id) => history.push(`/${category}/${id}`)}/>
}


export default withRouter(AllItems)

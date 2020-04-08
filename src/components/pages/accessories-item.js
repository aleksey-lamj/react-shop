import React from 'react'
import ShopListContainer from '../shop-list/shop-list'
import { withRouter } from 'react-router-dom'


const AllAccessories = ({ history }) => {
    return (
        <ShopListContainer 
        showInfo={(category, id) => history.push(`/${category}/${id}`)}
        filtred={(arr) => arr.filter(({category}) => category === 'accessories')}/>
    )
}
export default withRouter(AllAccessories)
import React, { useEffect, useState } from 'react'
import './shop-list.css'
import ShopListItem from '../shop-list-item/shop-list-item'
import { connect } from 'react-redux'
import { withShopServices } from '../hoc/with-shop-context'

import { itemLoaded, itemsLoading } from '../../actions/actions'
import Loading from '../loading/loading'

const ShopListContainer = (props) => {
    const { shopService, items,
            itemLoaded, itemsLoading, 
            filtred = (data) => data,
            showInfo } = props

    useEffect(() => {
        itemsLoading()
        shopService.getAll().then(data => itemLoaded(data))
    }, [])

    if(items.loading) {
        return <Loading/>
    }

    return <ShopList showInfo={showInfo}
                     items={filtred(items.allItem)} />
}
const ShopList = ({ items, showInfo }) => {
    return (
        <main >
            <div className="item-container">
                {items.map((item) => {
                    return (
                        <ShopListItem key={item.id} {...item} showInfo={showInfo}  />
                    )
                })}
            </div>
        </main>
    )
}
const mapStateToProps = ({ items }) => {
    return {
        items
    }
}
const mapDispatchToProps = {
    itemLoaded,
    itemsLoading
}

export default  connect(mapStateToProps, mapDispatchToProps)(withShopServices()(ShopListContainer))
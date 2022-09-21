import React, { Component } from 'react'
import '../assets/style.css'

const dataGlasses = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

export default class Body extends Component {

    state = {
        data: '',
    }

    renderGlasses = () => {
        return dataGlasses.map((item, index) => {
            return (
                <img src={item.url} alt="" key={index} className="imgGlasses" onClick={() => {
                    this.renderAvatar(item)
                }} />
            )
        })
    }

    renderAvatar = async (itemClickObj) => {

        await this.setState({
            data: itemClickObj
        })

        console.log(this.state)
        document.querySelector('#glassesInfo').style.display = 'block'
        document.querySelector('#avatar img').style.display = 'block'

    }


    render() {
        return (
            <div className='container'>
                <div className="text-center main-content">
                    <div id='avatar'>
                        <img src={this.state.data.url} alt="" />
                    </div>
                    <div id='glassesInfo'>
                        <h1 class="text-info">{this.state.data.name}</h1>
                        <a class="price">{this.state.data.price}$</a>
                        <p class="mt-3">{this.state.data.desc}</p>
                    </div>
                    <div className="mt-5">
                        <h1 className='text-center mb-5'>Virtual Glasses</h1>
                        <div className="text-center glasses">
                            {this.renderGlasses()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

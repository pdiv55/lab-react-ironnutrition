import React, { Component } from 'react';
import Search from './Search'

class Foodbox extends Component {

    render() {
        return (
            <div>
                {this.props.foods.map((food) => {
                    return (
                    <div key={food.name} className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={`${food.image}`} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{food.name}</strong> <br />
                                        <small>{food.calories} cal</small>
                                    </p>
                                </div>
                            </div>
                            <div className="media-right">
                                <div className="field has-addons">
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="number"
                                            value="1"
                                        />
                                    </div>
                                    <div className="control">
                                        <button className="button is-info">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                )})}
            </div>
        )
    }
}

export default Foodbox;
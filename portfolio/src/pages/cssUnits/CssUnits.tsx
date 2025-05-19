import './cssUnits.scss';

export default function CssUnits() {
    return (
        <main className='css-units-container'>
            <h1 className='main-title'>CSS Units</h1>

            <section className='unit-section'>
                <h2 className='section-title'>Absolute Length Units</h2>

                <article className='unit-article'>
                    <h3 className='article-title'>Length Units</h3>
                    <table className='units-table'>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                                <th>Equivalent</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>px</td>
                                <td>pixels</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>cm</td>
                                <td>centimeters</td>
                                <td>37.8px | 25.2/64 in</td>
                            </tr>
                            <tr>
                                <td>mm</td>
                                <td>millimeters</td>
                                <td>0.1cm</td>
                            </tr>
                            <tr>
                                <td>Q</td>
                                <td>Quarter-millimeters</td>
                                <td>0.25mm</td>
                            </tr>
                            <tr>
                                <td>in</td>
                                <td>inches</td>
                                <td>96px | 2.54cm</td>
                            </tr>
                            <tr>
                                <td>pt</td>
                                <td>points</td>
                                <td>1.33333px | 1/72 in</td>
                            </tr>
                            <tr>
                                <td>pc</td>
                                <td>picas</td>
                                <td>16px | 1/6 in</td>
                            </tr>
                        </tbody>
                    </table>
                </article>

                <article className='unit-article'>
                    <h3 className='article-title'>Angle Units</h3>
                    <table className='units-table'>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                                <th>Equivalent</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>deg</td>
                                <td>degrees</td>
                                <td>a full circle is equal to 360deg</td>
                            </tr>
                            <tr>
                                <td>grad</td>
                                <td>gradiens</td>
                                <td>a full circle is equal to 400grad</td>
                            </tr>
                            <tr>
                                <td>rad</td>
                                <td>radiens</td>
                                <td>a full circle is equal to 2π | ~ 6.2832rad</td>
                            </tr>
                            <tr>
                                <td>turn</td>
                                <td>turns</td>
                                <td>a full circle is 1turn</td>
                            </tr>
                        </tbody>
                    </table>
                </article>

                <article className='unit-article'>
                    <h3 className='article-title'>Time Units</h3>
                    <table className='units-table'>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>s</td>
                                <td>seconds</td>
                            </tr>
                            <tr>
                                <td>ms</td>
                                <td>milliseconds</td>
                            </tr>
                        </tbody>
                    </table>
                </article>

                <article className='unit-article'>
                    <h3 className='article-title'>Frequency Units</h3>
                    <table className='units-table'>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hz</td>
                                <td>hertz</td>
                            </tr>
                            <tr>
                                <td>kHz</td>
                                <td>kilohertz</td>
                            </tr>
                        </tbody>
                    </table>
                </article>

                <article className='unit-article'>
                    <h3 className='article-title'>Resolution Units</h3>
                    <table className='units-table'>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>dpi</td>
                                <td>dots per inch</td>
                            </tr>
                            <tr>
                                <td>dpcm</td>
                                <td>dots per centimeters</td>
                            </tr>
                            <tr>
                                <td>dppx | x</td>
                                <td>dots per pixels</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            </section>

            <section className='unit-section'>
                <h2 className='section-title'>Relative Length Units</h2>

                <article className='unit-article'>
                    <h3 className='article-title'>Fraction Units</h3>
                    <table className='units-table'>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>%</td>
                                <td>percentage - relative from its parent</td>
                            </tr>
                            <tr>
                                <td>fr</td>
                                <td>one fraction of the free space in a grid container</td>
                            </tr>
                        </tbody>
                    </table>
                </article>

                <article className='unit-article'>
                    <h3 className='article-title'>Font Units</h3>
                    <div className='note'>
                        <p>
                            Each unit inherits from the font-size of its parent or can be preceded
                            with a 'r' to inherit from the root
                        </p>
                    </div>
                    <table className='units-table'>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>em</td>
                                <td>width of capital M</td>
                            </tr>
                            <tr>
                                <td>ex</td>
                                <td>height of lowercase x (~0.5em)</td>
                            </tr>
                            <tr>
                                <td>ch</td>
                                <td>width of 0 (zero)</td>
                            </tr>
                            <tr>
                                <td>cap</td>
                                <td>height of a capital letter</td>
                            </tr>
                            <tr>
                                <td>ic</td>
                                <td>width of 水</td>
                            </tr>
                            <tr>
                                <td>lh</td>
                                <td>line height</td>
                            </tr>
                        </tbody>
                    </table>
                </article>

                <article className='unit-article'>
                    <h3 className='article-title'>Viewport Units</h3>
                    <div className='note'>
                        <p>
                            All these units can be preceded by a 'd' to make it dynamic (e.g., when
                            the device's virtual keyboard or browser UI is in view)
                        </p>
                        <p>
                            All units except vmin and vmax can be preceded by a 's' or 'l' to take
                            the smaller or larger of the dynamic values
                        </p>
                    </div>
                    <table className='units-table'>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>vw</td>
                                <td>viewport width - 1% of viewport's width</td>
                            </tr>
                            <tr>
                                <td>vh</td>
                                <td>viewport height - 1% of viewport's height</td>
                            </tr>
                            <tr>
                                <td>vi</td>
                                <td>
                                    viewport inline - 1% of viewport's size in the root element's
                                    inline axis
                                </td>
                            </tr>
                            <tr>
                                <td>vb</td>
                                <td>
                                    viewport block - 1% of viewport's size in the root element's
                                    block axis
                                </td>
                            </tr>
                            <tr>
                                <td>vmin</td>
                                <td>viewport minimum - 1% of the vw or vh, whichever is smaller</td>
                            </tr>
                            <tr>
                                <td>vmax</td>
                                <td>viewport maximum - 1% of the vw or vh, whichever is larger</td>
                            </tr>
                        </tbody>
                    </table>
                </article>

                <article className='unit-article'>
                    <h3 className='article-title'>Container Units</h3>
                    <table className='units-table'>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>cqw</td>
                                <td>1% of a query container's width</td>
                            </tr>
                            <tr>
                                <td>cqh</td>
                                <td>1% of a query container's height</td>
                            </tr>
                            <tr>
                                <td>cqi</td>
                                <td>1% of a query container's inline size</td>
                            </tr>
                            <tr>
                                <td>cqb</td>
                                <td>1% of a query container's block size</td>
                            </tr>
                            <tr>
                                <td>cqmin</td>
                                <td>the smaller value of cqi or cqb</td>
                            </tr>
                            <tr>
                                <td>cqmax</td>
                                <td>the larger value of cqi or cqb</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            </section>
        </main>
    );
}

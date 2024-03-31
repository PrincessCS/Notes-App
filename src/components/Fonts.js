import React, { useState } from 'react';

function Fonts({ handleFontChange }) {
    const [selectedFont, setSelectedFont] = useState('Arial');

    const fonts = [
        'Arial',
        'Verdana',
        'Helvetica',
        'Times New Roman',
        'Courier New',
        'Georgia',
        'Palatino',
        'Garamond',
        'Bookman',
        'Cambria',
        'Poppins',
        'Trebuchet MS',
        'Arial Black',
        'Impact'
    ];

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFont(selectedValue);
        handleFontChange(selectedValue);
    };

    return (
        <div className='fonts'>
        <p>FONTS</p>
        <select value={selectedFont} onChange={handleChange} className='font-select'>
            {fonts.map((font, index) => (
                <option key={index} value={font}>{font}</option>
            ))}
        </select>
        </div>
    );
}

export default Fonts;

import React from 'react';
import { motion } from 'framer-motion';

const ImageGrid = ({ images, width, height }) => {
    const numImages = images.length;
    const columnClass = 'col-lg-4'; // Default to 3 columns
    let remainderColumnClass = columnClass; // Start with the default

    // Adjust remainder column class based on the number of images
    if (numImages % 3 === 1) {
        remainderColumnClass = 'col-lg-12'; // 1 column for the last image
    } else if (numImages % 3 === 2) {
        remainderColumnClass = 'col-lg-6'; // 2 columns for the last two images
    }

    return (
        <div className='row'>
            {images.map((image, index) => (
                <div className={index < numImages - (numImages % 3) ? columnClass : remainderColumnClass} style={{ padding: '1rem' }} key={index}>
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25 * index }} // Delay based on index
                        className="d-flex justify-content-center"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            style={{ width: window.innerWidth >= 700 ? "auto" : width }}
                        />
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;

// src/components/organisms/ReviewsSection.js
'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa'; // Icono de comillas

const reviewsData = [
    { textKey: 'review1', authorKey: 'author1' },
    { textKey: 'review2', authorKey: 'author2' },
    { textKey: 'review3', authorKey: 'author3' },
];

const ReviewCard = ({ review, author, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100 flex flex-col items-center"
    >
        <FaQuoteLeft className="text-primary/50 text-3xl mb-4" />
        <p className="text-muted italic mb-4 flex-grow">&quot;{review}&quot;</p>
        <p className="font-semibold text-secondary-dark mt-auto">- {author}</p>
    </motion.div>
);

export default function ReviewsSection({ lang, dict }) {
    if (!dict) return null;

    return (
        <section className="py-16 md:py-24 bg-background"> {/* Fondo crema */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-12 md:mb-16"
                 >
                    {dict.title}
                 </motion.h2>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviewsData.map((reviewItem, index) => (
                        <ReviewCard
                            key={index}
                            review={dict[reviewItem.textKey]}
                            author={dict[reviewItem.authorKey]}
                            index={index}
                        />
                    ))}
                 </div>
            </div>
        </section>
    );
}
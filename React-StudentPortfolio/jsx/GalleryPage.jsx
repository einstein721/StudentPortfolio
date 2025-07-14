// src/pages/GalleryPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StudentCard from '../components/StudentCard';

function GalleryPage() {
  const students = [
    {
      name: 'Alice Mwangi',
      image: 'https://via.placeholder.com/300x200?text=Student+1',
      bio: 'A passionate software developer who loves building Java and Python applications.',
    },
    {
      name: 'Brian Otieno',
      image: 'https://via.placeholder.com/300x200?text=Student+2',
      bio: 'Enjoys working on frontend interfaces using React and Figma.',
    },
    {
      name: 'Chloe Wambui',
      image: 'https://via.placeholder.com/300x200?text=Student+3',
      bio: 'Specializes in backend systems with Node.js and MySQL.',
    },
    {
      name: 'Daniel Kimani',
      image: 'https://via.placeholder.com/300x200?text=Student+4',
      bio: 'A full-stack enthusiast exploring mobile and web integrations.',
    },
    {
      name: 'Eva Mutiso',
      image: 'https://via.placeholder.com/300x200?text=Student+5',
      bio: 'Loves turning design mockups into responsive web pages.',
    },
    {
      name: 'Felix Kiptoo',
      image: 'https://via.placeholder.com/300x200?text=Student+6',
      bio: 'Keen on data structures, algorithms, and competitive programming.',
    },
  ];

  return (
    <>
      <Header />
      <section className="card-container">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            image={student.image}
            bio={student.bio}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default GalleryPage;

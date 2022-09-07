import styles from '../styles/Home.module.css';
import PageLayout from '../components/PageLayout';
import Image from 'next/image';

export default function Home({articles}) {
  return (
    <PageLayout title='Home'>
      <div className={styles.container}>
        {articles.length === 0 && <p>News not found</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index} className={styles.card}>
            <Image 
              alt={`Image ${index}`} 
              src={article.urlToImage} 
              width={'350px'} 
              height={'250px'} 
              layout="responsive" />
            <h2 className={styles.subtitle}>{article.title}</h2>
            <p className={styles.text}>{article.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/news');
  const {articles} = await response.json();
  return {
    props: {
      articles,
    }
  };
}
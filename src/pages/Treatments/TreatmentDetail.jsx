import { useParams, Navigate } from 'react-router-dom'
import SEO from '../../shared/SEO'
import { getTreatmentBySlug } from './data/treatments'
import Hero           from './sections/Hero'
import Stats          from './sections/Stats'
import Overview       from './sections/Overview'
import IdealFor       from './sections/IdealFor'
import Procedure      from './sections/Procedure'
import TreatmentGallery from './sections/TreatmentGallery'
import Benefits       from './sections/Benefits'
import FAQ            from './sections/FAQ'
import BookingCTA     from './sections/BookingCTA'

/* ── Treatment primary images ── */
import implantImg   from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 09_45_00 AM.png'
import rootImg      from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 09_47_16 AM.png'
import alignerImg   from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_15_23 AM.png'
import smileImg     from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_15_33 AM.png'
import kidsImg      from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_15_35 AM.png'
import ceramicImg   from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_15_36 AM.png'

/* ── Secondary / supporting images ── */
import implant2Img  from '../../assets/Images/Home/Implants.png'
import root2Img     from '../../assets/Images/Home/ChatGPT Image May 29, 2026, 10_14_52 AM.png'
import aligner2Img  from '../../assets/Images/Home/Aligners.png'
import smile2Img    from '../../assets/Images/Home/Makeover.png'
import kids2Img     from '../../assets/Images/Home/banner-kids.png'
import ceramic2Img  from '../../assets/Images/Home/banner-quality.png'

/* ── Real clinic gallery photos (Dr_Roshan) ── */
import clinic01 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.34 AM.jpeg'
import clinic02 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.35 AM.jpeg'
import clinic03 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.35 AM (1).jpeg'
import clinic04 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.35 AM (2).jpeg'
import clinic05 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.36 AM.jpeg'
import clinic06 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.36 AM (1).jpeg'
import clinic07 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.36 AM (2).jpeg'
import clinic08 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.37 AM.jpeg'
import clinic09 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.37 AM (1).jpeg'
import clinic10 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.37 AM (2).jpeg'
import clinic11 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.38 AM.jpeg'
import clinic12 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.38 AM (1).jpeg'
import clinic13 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.38 AM (2).jpeg'
import clinic14 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.39 AM.jpeg'
import clinic15 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.39 AM (1).jpeg'
import clinic16 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.39 AM (2).jpeg'
import clinic17 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.40 AM.jpeg'
import clinic18 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.41 AM.jpeg'
import clinic19 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.41 AM (1).jpeg'
import clinic20 from '../../assets/Images/Dr_Roshan/WhatsApp Image 2026-05-30 at 9.51.43 AM.jpeg'

const treatmentData = {
  'dental-implants': {
    primaryImage:   implantImg,
    secondaryImage: root2Img,
    gallery: [implantImg, clinic01, clinic02, clinic03, clinic04],
  },
  'root-canal': {
    primaryImage:   rootImg,
    secondaryImage: root2Img,
    gallery: [rootImg, clinic05, clinic06, clinic07, clinic08],
  },
  'invisible-aligners': {
    primaryImage:   alignerImg,
    secondaryImage: root2Img,
    gallery: [alignerImg, clinic09, clinic10, clinic11, clinic12],
  },
  'smile-designing': {
    primaryImage:   smileImg,
    secondaryImage: root2Img,
    gallery: [smileImg, clinic13, clinic14, clinic15, clinic16],
  },
  'kids-dentistry': {
    primaryImage:   kidsImg,
    secondaryImage: root2Img,
    gallery: [kidsImg, clinic17, clinic18, clinic19, clinic20],
  },
  'zirconia-ceramic-teeth': {
    primaryImage:   ceramicImg,
    secondaryImage: root2Img,
    gallery: [ceramicImg, clinic01, clinic05, clinic09, clinic13],
  },
}

export default function TreatmentDetail() {
  const { slug } = useParams()
  const treatment = getTreatmentBySlug(slug)

  if (!treatment) return <Navigate to="/treatments" replace />

  const { primaryImage, secondaryImage, gallery } = treatmentData[slug]

  return (
    <>
      <SEO
        title={`${treatment.name} in Trichy | Dr. Roshan's Dental Care`}
        description={treatment.heroDesc}
        keywords={`${treatment.name} Trichy, ${treatment.name.toLowerCase()} dentist Trichy, Dr Roshan dental Trichy`}
        path={`/treatments/${slug}`}
      />
      <Hero treatment={treatment} primaryImage={primaryImage} />
      <Stats treatment={treatment} />
      <Overview treatment={treatment} primaryImage={primaryImage} secondaryImage={secondaryImage} />
      <IdealFor treatment={treatment} />
      <Procedure treatment={treatment} />
      <TreatmentGallery images={gallery} treatment={treatment} />
      <Benefits treatment={treatment} />
      <FAQ treatment={treatment} />
      <BookingCTA treatment={treatment} />
    </>
  )
}

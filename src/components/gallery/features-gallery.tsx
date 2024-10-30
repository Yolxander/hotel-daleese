'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function FeaturesGalleryComponent() {
  const features = [
    { id: 1, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/672063928e297.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761711890&Signature=TxD5%2F4UPy8tmiGrLkOOCkJMi8V1pKOMQECrZ51odYOBU3WAnoFBvQ8JobOeNC0D3YLAi0pgAJSEL5fSQCp4Nxi%2FqraqiiXZlBzgOXQL1OVn6OV3XQ4nK9SHXky5D0WH%2F%2B1FBUg%2B%2BmNIFhbsbyagaZpW7qNa8b5J7yB0hWpppIRUcQvH31RuUhdf0ZJPlq9z1pH2vmzpUz5diwca%2Fn4M93EMKZVfvGOWbNZ%2F1FyvdW0braTfFjdApj0r9bFmfDZJWiyjyTLkdc1Rwr0r6%2BH%2FxvOV%2Fo4WZMlt4AX5opmvoUPGXp6hj%2F7SxKXrLEVfCy9%2FuZzSvYYh%2B4Tw%2BZ5Z1OuAtzw%3D%3D', alt: 'Pool area with lounge chairs and tropical plants' },
    { id: 2, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/6720639128630.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761711889&Signature=iwA%2F5ds9MDJbcNpHzYgdItiW9kmRO0spbO9E7eArf944bZzzFW7YcG2CrY1EdoDrYa8%2FA0bZl5ntdLSIolCb1e%2B%2BOA%2BG5H9g40erQ45viFSfmYNgFCUo8F6%2Fy%2FO3adOIRjj%2BZ%2Bebs%2FYfeUVe2M2lCvrrfltMXhKXOauetkcAXAzCtB2RPLhwHuca0PoE0QMluKfFPGW3pKTZyJ7ARMX0KF8c9Ga0Epw6zhkFxhdP5XqEIOEGaNHxiwVPbIxS3ss8B4kOia2zX7LGVhoa%2FcUZT%2B%2Fi6Hr6UpmFYEUjGpUx52Q9mFN%2BK03BeRuLPT64IwwVr9yDJSbT%2BAlHgk9%2BMi6V9w%3D%3D', alt: 'Lush garden area with a circular mirror or window' },
    { id: 3, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/6720639243599.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761711890&Signature=RkgUV11s6aly3FFj4mBFFr4%2BRxO67kDkHUId140%2B4DUv6SYofUM5x7IWHKHIlT1rNEpwjKsB2%2FAh15nsn3xF1ZnLekCjSwdqM5K8MuLum8lVFp8vxGu7h6NnE%2FXblKd5NU68wLualXFFUS4lThy2QVvApxe49nQrLqyLPcV9XfsTkxGejUDdLV3ECBV77Nwlob255DtoYNIj7meyUlmJCfT3lKEAQcGohI7%2BwbFwcYUpXZSxgPtaEqBIzEVIZYxThrbuNgwWOyoSLyAfbvPAs24ltEuiRi%2BEdsQ13kjv7GrDMGJV23HvEusP3LykxIdSWJL3p%2BffBlpudJNj64in0A%3D%3D', alt: 'Exterior of a pink building with palm fronds' },
    { id: 4, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/67206391d7781.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761711890&Signature=Q5RwJLFl%2F7GtOdIcyms4tEmvFBI%2B3EUUq55JOnUACNwN3ycDoGefIeSjANobMd5p4sSGNd00odwqXVVhhrm%2BnG6LADK3lr4ETDVI5%2BVHxe4hlKSIf4CEcMJ%2F00ehEFrFyvgfqPoehoA4u6LvOmeWxCOWAqs4ROwPkHqeKsNCOfbfpheO%2Fel5TQltf5bmKjOI5im5hnarO0GHbGs1k%2BtQ2Msr9wzPCS3GoLkJKUNXFp5VFT0PzKaBlkirtVxnI4d3av1EAZufIuq73r03mZUk2tmu0hsPgk8le1YiQsOKvTJk8qp4kP284fc6%2BOOIBHzroPGVigUX4CVvmqNHKCRIcg%3D%3D', alt: 'Interior view of a bedroom with wooden accents' },
    { id: 5, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/6720641817a2d.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761712024&Signature=Opvg4%2BV4nV9FB6ABw2WxnKE%2FjLI%2FP2lVk3rUMsj%2BJ0pGEk5gUTwn67%2FIoANN9ePvWktlbldADHYtcNmbE1gEIVyncX3w50Ye4Fw6DyVrYyNIhlbRdySePzjaMgaRcsYrepp27%2FNgpxcaAbBDvQ8OA0mQ1eubXeSDJORcdIMweb3B70SRRftJl8IpzC3s5kDoxwzVfm4ygJ02c81NAR8jX5ji0Twak0fp8%2BWhvDOziAxovAm4V7koShT%2Fmvl3CRgUsUKXvDNhgeyx2JDxrvCFJxZpo5HcooVjn85N464Il92DdrAOYwMEtYAJjv%2FCfi%2F7PE49csDdnzOQtsRXmgaPwg%3D%3D', alt: 'Additional feature 1' },
    { id: 6, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/672064185e25a.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761712024&Signature=WRhwkFAUSNcWRHrcy%2F6faLLTegQEGIqyI0Ip9oMzA4Tw7z9ss7MQySPjjZB3obi%2FQ%2Fy52fL2pu51cxDNl0DMXfhNwo%2F89h10Rl95%2FgCS05I%2BXUHD2Soq9Cj6bB3pwGEkj6Otw8y2BGImijahiEROdAhn4QXi6JLf%2Bz2C0igTIxmti%2F36ZeSJsUIl7zC1C5yXNJ37Jgep6iuR73bb%2Boj4KRVU0jK4qQEGkAgGhy0FBH3BxOf2tYA1CfbiXHc7BSJjfVIFKaJkcEcXdvs23iAayqYW5DIFVKe0IxA4lhQZZzLXEp16WuZgneWu5XXQU18Awo2Qyh1SJd3FFis4O9M01Q%3D%3D', alt: 'Additional feature 2' },
    { id: 7, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/67206417856e5.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761712024&Signature=o1XyXFxpH0cHMUb98FHsFxPCLpRkRmM7cbXS7ZGa%2F3Sm%2FbBEQPOK4wAgqx4skOIzkF9WeuV9jRuASk%2FVUtC8i1O3sL%2FfWmMK1tfVGVqPymtMDoA2S4BYgxQT05mXE45M8N5lfg9%2FHGqsv3esBh3vUqeq7wlWxsh%2FUXs39VNFVOxlpjUUMGPHehwHW5wGu8jqGPibxmInvpxeQlQ6AIqrmuLNAHb%2BwEL%2Fz0gYntUIBbFDVuJYCV1WwOOQLjSjSerdgaWsm3%2FCWCh%2F2Xr1qzWBeUdpxfBzqSvxO85u3bGVswZDr08FK6UuqyU%2BuCExlmwLBNZP0vwPKzRuAwaqFFDy3Q%3D%3D', alt: 'Additional feature 3' },
    { id: 8, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/6720646ee2450.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761712111&Signature=ggKZ0Hnz9TZrYfnJubUlMX%2FSEmtVY%2F5fbKWE%2FwVNkL%2FOmaAYQ%2BLFXcz8aiCOkL60ll%2FAIhV41SuC5lBwHIZkE2Mgwg8At%2BSlMOYjye3pNyU6z3fre6B%2F8AcSfkJ4vWw0FgWbHHdexvHrPlLWRN%2FqvJn5KX8p4CngiKgX9bbBHZa4Nge8MRpV3EEh45XoMRjDJ30oaGNEVrV0sezEgraoohSQ8nr%2F0UqvUQzRoXu6MZRnvcak%2BOJ3Q%2BBhOGv1Jq0a8OhIQ%2Fnx2iy68vkenZ%2BYIvfSwwz3Tce7Aj1nDxV238zVbmCB5jxOmcL5wo20Sr%2FNS2oCCFo4nOSG%2FStaleR2Qw%3D%3D', alt: 'Additional feature 4' },
    { id: 9, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/6720646f7c85e.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761712111&Signature=YiKltiDRBwB3aO5lLFQwLClA1by5J3qwbK9LOV%2Fu9aDdcHkVshUEf2xSHIKC0bcymHDjdnmr2%2B1noubFTSyZswu0pA51KLlxFsXkJJ5q44rCbGA6zBlSQHlwOPJBgsoOstsLkwIsBg6eD%2BjvwCkAZJeB1wo%2Blu%2B6T4N9hQuDiI1A%2BtVRt0camTA4qQJ5K6jEudlIOndP9P2i%2BDdUqSMpAMzfPRKF8GgqOqKOqGA9Gd9HxeL41F5j%2FaWI%2Fz21XnygpCFLrLZNa9glrwMAZg0qRqDMVl%2FB5fNOa1OG%2Bu%2FducGlr5nQ9%2Fa0uyXwPruOYAwaG7kHJYLe7GFdq2pb4tT7eQ%3D%3D', alt: 'Additional feature 5' },
    { id: 10, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/6720646fd4b65.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761712112&Signature=cv6ZwqJn744Q%2BYX7%2Ffh%2FaakIkJxPIf%2FQTXpetnNyu9IgEyxLxAVjjrRS7R1%2BSE4%2FIOLK9md4QW3m6mU5JVFlU8tmuOcMzPSB%2BrOivrVVjq%2B6eFodZdwmGUPOQnEbHSmaNV78Dlz%2FADZLW7hUBadJcoPG7qoG0aN57eIHys8gC1EVvi37NqgsofOduo%2FQl22974uPGVq0lKIRgD721P%2B6u0M5UGDLmy1ku5XSF3nzXakXyboWp5swnXbVpzAlslsWs1a7ZuALC80I%2BQKJ5Ht0OB8FbcFRjxInoBL6oW5jERr4PyWSgGMFC%2BSM0TdY4MIw1OerStTqjGPObQsah%2FiPGw%3D%3D', alt: 'Additional feature 6' },
    { id: 11, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/67206510d69b5.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761712273&Signature=OI09%2FDesnUp%2FFXXbQxNr6M43rQnmC8M1oMOHXETQP8RHHe5qSIThnUFX3pmgWu00DXN9QKalEukkaCGY8Tk5yolWiZpUklcEqdLqVCK6WdewHNq%2Bjftojeikmz3WT%2B4nClhUXVGT5gbGYPsQSnwP2Yjp1eA7zu2uakgGNh4sFd2OSY53D5KrNbIu3Vli5fLP19X6ajh2jP75ez2wx97pbdAcl1IDyiBPvpJPTdQKW0pI3OZshDaEkFuWn5Ho%2BtLZQCogSu1UKBVMBvLcPTm8TNrzVx%2Bzer%2BHHVYT4Q1DQE7rEU2zbK5tgIQaFjhgrdmHWK41KScq6Eytsy6VnPL%2BvA%3D%3D', alt: 'Additional feature 7' },
    { id: 12, src: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Gallery/67206510563ca.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761712272&Signature=gW6G89RXeKbXsjvBpvWt55bd3C4DyKbidb0mSE%2FRWZZTyAnTsi%2B0sOBFkf6j69yeujOyTKQGc80Xn4WuwKftYnzhr8Gs3Hj66WSmcbfH1%2FLwyTGQrZN3oba19vtRXm4XRN8CUBS6vOJz9mfdaeOHP7ffYnktlJzCQ5QBLRanMkpjzC7NSDD3Z1hdi7rsUERjQr8oI0UJuC%2B%2BSlWLfWsU1rRM9hgiCOlw18GFRzhudW2Ra9sglddzr19SVddbx7HjwsoNSJdXHO5H8Ji6InQ1kQJN4fBP%2BMuSgV0Ggg%2FSApx8Z0N0wBe4IAkLXJ1whatwMVsLOxXfusUf%2FMGJawwsgQ%3D%3D', alt: 'Additional feature 8' },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
      <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="bg-white py-16"
      >
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {features.slice(0, 4).map((feature) => (
                <motion.div key={feature.id} className="aspect-[3/4]" variants={itemVariants}>
                  <Image
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {features.slice(4, 7).map((feature) => (
                <motion.div key={feature.id} className="aspect-[3/4]" variants={itemVariants}>
                  <Image
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {features.slice(7, 10).map((feature) => (
                <motion.div key={feature.id} className="aspect-[3/4]" variants={itemVariants}>
                  <Image
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.slice(10, 12).map((feature) => (
                <motion.div key={feature.id} className="aspect-[3/4]" variants={itemVariants}>
                  <Image
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
  )
}
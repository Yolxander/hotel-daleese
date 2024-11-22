'use client'

import { useState } from "react"
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryItems = [
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
  { id: 13, src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401da32d86a.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791139&Signature=iVaWSOQ6%2BY%2FLnHKXJPgjcymRBETYPFwQbVc4p%2FfAvdBjYH5hWw%2FSs63fGSKRqmMQDoXRwRr0%2Bfr2XhOgpq3frgkNixO57aI6Y8Vl8ilLYstdphTWh6gC0wR4%2BHyyDK0o39MHyq77qRtZuw6UFzIgojiaPh4%2BQsSTi2PaRKibMOCZnOvF6yeGfHpQaCH3JIFh%2FQ%2F4kXWBjNpkPywT0Y9b7FoNVaW045pKgODJIMGYXlU10%2B9vmhPfKwNMp6uWF%2FBT7cUwI%2FCNwZE6j36ue66CAPA6dM9iu7dSc8uA%2BA0xBfgR0o3Fg1EUE%2Bk%2B4L5D5PtK4LRYUkvO7RAyREMhLBM6KA%3D%3D",alt: 'Additional feature 9' },
  { id: 14, src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401da3cfbfd.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791140&Signature=iQslxduUQVDM4gZdzJBy%2F11qpgNPTTDr%2B%2FbCDH%2Fmzhe1RUOGqnR6B6XFrLlrbg4%2BHosYOWdtXBOj8ViVTD606MfhNcno%2FvdX5%2Bb9jhoIW0rNXwfADv7LreB8JbPCSNCEBfJJekNvdLdv6nMKLQPbxwCCbSSWY2SLQufJZngTAje7mI6VFfON0trek%2Bn2eKxNelL79v66nnjGF106Pb5159kAtItSX4jUKTCe9o%2BU29JdwgliE%2FF%2BcRCH5S%2BTPtlSJc32KzsYgbzkwaPq4L4vOdWR0d9uMpi3fflgqFpl9pgIN0d6ND4b9oeLl%2BqwiX7n%2B9P1NzdzypNnxYfg0Njhpg%3D%3D",alt: 'Additional feature 9' },
  { id: 15, src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401dce55738.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791182&Signature=WXQ4saG1bVPo%2Bwqaf5RyN9P1Mo9WH8972XkS6fUQjn8T5GEcxVTpfuRCUUiuyueiUvhY8DpbUjn73pKLBFKZnkONjMEjoqpOtXdh5Fd9TOqxof%2BFrLlAgPVDsvA3z18zQ8n7IYuCyUN56YovxbA%2Fy%2FshHkYq7qKFOk2BH2rhPS3P9v56IiDlCJ1f1fC5n7AwFJvQVc01Oq%2Fo0ULMltxWXAEVvEdaEs0Erm6shjfwPzb%2BGiRA4DWPI1OoJgstNWe22MT%2Fy%2B9MjN733OZ0KiRM9xh41x2fcfxwrIjZyf8Fpz05DKyvQFVhU9K7Lgg0EaQfahEi1m10qW%2Bbjz0iiyWJUw%3D%3D",alt: 'Additional feature 10' },
  { id: 16, src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401dcede7b0.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791183&Signature=lraHDde0YENNY%2F5WtHNRD2%2FDkSFGqseBO6n%2B3wJHfKlcbIqMZ%2BV8VnQleYIX0EAHUdWECqM7Xt%2Fh%2FG0TJN20aNCoEycAPiP42sykBj0G4mmapRod25LIGKg6fgQca7larTi5cWbn8bBDqinAo4ZcemLfUM5l8YoANdzpegSiEgwkARr%2FWr8b9eoJ7TFShWKykr3A0b%2FYGqmXH27AsvxinJgR0HprcYYs9ME4iJr4CvnijjQbAQacrZ9tkCn5kgxHpHxD5sU6zWZ8%2B2WSXrYXlj%2BujgXrLiL4QqKRiZMs%2FAJtOz1VxTNkJdDmDnyiF9SnKTgKmz1D9rhWYeIHiqQe3Q%3D%3D",alt: 'Additional feature 11' },
  { id: 17, src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401dcf662dd.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791183&Signature=WuL2QGgbjU2kfkjHUDYEKPspG2C1VaDf9j1tvx5JWkIRi1F6SsrIvZjn4dQrjoI7xzYbgZUNaRVPRNgKegkrVQYwRmBCk1xnhyZVMN5XNivmY3sIqAnqAWkTfvy476EiWAmWn%2BYrouGh3TGKpt%2FvGlMQRu%2FyXUCrkR7bCqCu4YlSvIEiSaf%2BDrzC%2FkmPYIPLwZ84eWzDM%2BM5ejiDc0sqrNHEkocLccMIqWWIwTliaIptJPVLSphbxJ88ofyaAfdKFrV64snpbhUVkkA6SZSWkjqwWscYHTZ7nzH%2BeG7J%2Ff9zpbNnsDp49i0fQ2K0jrrw%2FigsyBq5RTYtdgKiIbHMQQ%3D%3D",alt: 'Additional feature 12' },
  { id: 18, src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401e51161d4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763791313&Signature=Ichn241uGd%2BzuPclsXjt8lBxlRTsqk7D2qMul3J%2BUEUOL3kvKPAjQ8pWZZQb24FWAmZzlB8%2Bx8abT2OhM5CG6fPBWLB%2FLNdWRoWgtH6pY4GGpY2BBwA%2BLjoV63cYVJwzUjCkv%2Bv3%2BDeKmTT3h8f%2BP8NCyFfigx3MuWfIWSRB%2FZMO2gQeU2saQxY4qFH477w99rmpkrU1062Tha7uXRtSJcxOBWqnXsgPT1Wd6%2F1AFo50J7iEy%2BzcevB0YQ8eevJ23iZ93d3mPD9QJqm0C0xRMevx1pxDqkXI2T6iiZRj5JG4TToJf1uf0kLZaCSi4SAbnJKfy5iVDpZlHxErdd3%2BNQ%3D%3D",alt: 'Additional feature 13' },
]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Lightbox = ({ currentIndex, onClose, onPrev, onNext }) => (
    <AnimatePresence>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[105]"
      >
        {/* Close Button */}
        <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform transform hover:scale-105"
            style={{ height: '120px', width: '120px' }}
        >
          <X className="h-[60px] w-[60px] text-white" />
          <span className="sr-only">Close</span>
        </button>

        {/* Previous Button */}
        <button
            onClick={onPrev}
            className="absolute top-[95%] left-8 md:top-1/2  transform -translate-y-1/2 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform transform hover:scale-105"
            style={{ height: '120px', width: '120px' }}
        >
          <ChevronLeft className="h-[80px] w-[80px] text-white" />
          <span className="sr-only">Previous image</span>
        </button>

        {/* Lightbox Image */}
        <motion.div
            className="text-white text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
          <div className="p-4">
            <motion.img
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={galleryItems[currentIndex].src}
                alt={galleryItems[currentIndex].alt}
                className="max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Next Button */}
        <button
            onClick={onNext}
            className="absolute top-[95%] right-8 md:top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform transform hover:scale-105"
            style={{ height: '120px', width: '120px' }}
        >
          <ChevronRight className="h-[80px] w-[80px] text-white" />
          <span className="sr-only">Next image</span>
        </button>
      </motion.div>
    </AnimatePresence>
)


export function FeaturesGalleryComponent() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    )
  }

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
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {galleryItems.slice(4, 7).map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="aspect-[4/4] cursor-pointer"
                    variants={itemVariants}
                    onClick={() => openLightbox(index + 4)}
                >
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
            {galleryItems.slice(7, 10).map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="aspect-[3/4] cursor-pointer"
                    variants={itemVariants}
                    onClick={() => openLightbox(index + 7)}
                >
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
            {galleryItems.slice(10, 12).map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="aspect-[3/4] cursor-pointer"
                    variants={itemVariants}
                    onClick={() => openLightbox(index + 10)}
                >
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
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {galleryItems.slice(12, 15).map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="aspect-[3/4] cursor-pointer"
                    variants={itemVariants}
                    onClick={() => openLightbox(index + 7)}
                >
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
            {galleryItems.slice(15, 18).map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="aspect-[4/4] cursor-pointer"
                    variants={itemVariants}
                    onClick={() => openLightbox(index + 4)}
                >
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

          {lightboxOpen && (
              <Lightbox
                  currentIndex={currentImageIndex}
                  onClose={closeLightbox}
                  onPrev={goToPrevious}
                  onNext={goToNext}
              />
          )}
        </div>
      </motion.section>
  )
}

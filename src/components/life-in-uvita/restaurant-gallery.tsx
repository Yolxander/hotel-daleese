'use client'

import Image from 'next/image'
import { Lora } from 'next/font/google'
import { motion } from 'framer-motion'

const lora = Lora({ subsets: ['latin'] })

const images = [
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d4575be6.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761624261&Signature=gTJR%2Fkv43KrZ%2BZGKOl4dIDanfuuD4uqj18%2FdNVP8yHKn1jScSAQnSX6N4b6SZGl1MMpbn36wP%2FiINvhW%2FzI24JMnzzXcovOASeHBawo6t6qL0C1StHh3rXMNPPdW5VaqG5W7RGQlgAL0MUC0Lgr7BYwB2GWBZGjKb9cIOcrEUhQZFKQRyb%2BEI7ig6%2FAyGIS1d5RuDbDxIr2MqUIhKfDX4Odr6YDf9oDm0VIevJBgDtjuvqAEJG9v2l%2B0%2FrvM8LsB3NviKjfkF9%2Fs5oSN5cpSMEvFQifqIF6sAJUs03%2FovixyxuEtB6y5tGiST5z6NyN5HDht8PCypfpZgIn4cQXXRg%3D%3D",
    alt: "Cafe Vivo table setting",
    width: 600,
    height: 400,
    caption: "Cafe Vivo"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d44d464f.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761624261&Signature=mZaxB78VPA6HeNskszNxq8%2BJyQrG2myakmLP9GnJK4%2FC%2FKwNg2PyxH2emPiIzEpyWI3v3YT%2F3r0JpN1%2F9w05PCqJk1eYyusbQkikRMGeAwGPvF1LWR1SLQe0D9nt1FtZLgN2bcCSZ80Kg1hSCarrHP8HItzEDfxE23StzIcBUzb%2FRoh6xpaZrmdbde0mbn9I5B8gbCHisOub0lj%2BJsvR0J3k%2Fl32GZZX8iEiXL8UsetX36JAd7IIj7dQqhj6xBDcOybRmrp4TsJQ4uzI%2BNjDOi%2Bxi5paV7zSfw6BLpeVNUiiX%2FcmECgDUHmiaLy%2BzRjugftxCF4giX0GGolV8vIRwg%3D%3D",
    alt: "Indómitos dessert plate",
    width: 400,
    height: 400,
    caption: "Indómitos"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d45281c9.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761624261&Signature=CBouG1duEz9790FLrvXk024ZZyC%2BaXR%2Fe9%2BHLw7gCR9eSFj03RNBSWbCsvtx8QVnG6mPZonFQFhov2b6mNU57lY%2F4m152BhJ9TFiDfq81ENpojcgcdnvX8MweuXLzuNOXVFaUeigZoJu6Y1XsQ73CJEH9DkPEWprdi1gWGMuO7oPkjF%2FWuZKr5EQ1XusKt%2FFMZ0GVgP0uDq%2FEJ4IOVbuz2lYSJqVQNDkjCvSRM%2FNBvbhvwf%2FGdn6iKGt46s9y071tq%2BbP4idP7thD1pkkrojh4jqJ%2FcxazBLDmvN0Ga%2BGACXwQj7KgDhrpaX5XpBRImIMIlFaxeLu5fZcUzk1LbtBw%3D%3D",
    alt: "Indómitos quesadilla plate",
    width: 200,
    height: 400,
    caption: "Indómitos"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d443e66d.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761624260&Signature=ZbGAtzVZsCyH91WGPMvyU5rOlcuhzm9IyVYcBavvkfDsf7ngGV5E2CJMTBjS5vX0CBG44f4tUD3C72XOI9xKYOc4btqbRrueG1iXycCLkNyn8g6qCU04CC%2BHKinXsMxAbHwiJBtN95jJGwH9u9SwzSJbZLFCqMiUf%2B2KulqzuIDhfPlsAnuavP%2FZyCb%2Bxw0Wq3H3AP1XqfvCawahiSQ0jwB0lNIBkkYGJfcIfeVkxQmQmEeLjwuYvhgL3bGwiCcZ%2FhM2fSVUw0Y8fS1u5eviu1Aw9s4x%2B2N12JVhD6Lqz8ZxuSCpH0Y1ox131HIV3ipPOaAAbYSsDNNj6HWVmsycAQ%3D%3D",
    alt: "Large restaurant image",
    width: 800,
    height: 400,
    caption: "Indómitos"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d43e2643.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761624260&Signature=hIKC9CRpQfvj5VwdMDqok50Ew6h31HxBockA9s%2ByBAo%2FGrCTtPPFRI1Jn5%2BxE1FCrSJpGcyKo8JfQVIhjrRwsMv%2FTsbn52p7ueTxi4LRnqoDT4xi7xO%2FkMGfnTxk2cWppGJbgfRtkL9LQTbC5OScHqiZuiWtgaGgMmGbiDbbhZ421RsEVX9nfaQgdfCe%2FGfrsp2RkoxisYfGvarJZPmIbdUqBrzn%2F4dNU77tXHnzr7rv30WIkYj8mig6RX7lfg2lOeY070lENP9Fc%2FrPgh3y4o8EnEick5c60Dq%2F61u2T52i1R%2BHNmyGmobRYILev%2B%2BS2rrFxyYyiumR4EIvhJew9A%3D%3D",
    alt: "Smaller restaurant image",
    width: 400,
    height: 400,
    caption: "Los Laureles"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f10cf23579.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761625167&Signature=hm%2BUuH%2BHPteiBw8QX1yvziNsPoBSFlfk%2B3CyD5SdIMif%2FVipodTSwHq%2Fd0lNDvRyansKZWc7ZmK8gzF0KoFPURD6Uxk7hxFIK%2Fvv%2Fj1pAQlrTHoSnyp2FYqLE4J%2F7oed5Uxa%2FpKZhMJ7TAFn3wBtBGdO28b17t%2B9YhlCIs0B1vGP%2BS%2F%2FNq1RHYzlUCBkLk%2FXsVoNcnoZ12Xn5z34Yw5k7rU7KrHfyN6Unjd72%2F8u4ZkBjl1VU7HObGTAV4Xvxxpne2EmZWvlX%2Bcre4vWj9%2B1BZfcNjXUu8Hz84U5Ojn555T3pprFtFqJ2mgPvMW3p0cPlt5Wrk2qITU8HTF32RRqlw%3D%3D",
    alt: "Equal-sized restaurant image 1",
    width: 600,
    height: 400,
    caption: "Los Laureles"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d42ac32b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761624259&Signature=HBcLXfm%2FkWM3GBFJqNZrTLFtUHgc6k5Exm77PYHowWgQvfWLkPK%2BUfYNL5JBVtP9mWNAQBU7o%2FN4A4gHfqL5%2BiSmYO0E45P7fAo8yE4%2FKlfPvyjB5rGnfQ%2FWgJab0FAt8914JjX7sWs%2FRjfdHp%2F%2FCZ4Wk8PxHWAG2d0LkCL%2BnzCvtAcvMct8m%2BHcKmdFYW67u29Uf8rQdzNYZkSX5ZrJdqpnIzFzHsEXDHu%2F4Q%2BPYKk7XrKZaWiNPcI9ay%2FG747Ish98jLM8xmDS3p8MvIRHIl8VeROF7Xe4NNPHf984d1YBP6muH%2FpKsvoXGt3rSCe0iOglxRJOwe0L6t3vIO3E5w%3D%3D",
    alt: "Equal-sized restaurant image 2",
    width: 600,
    height: 400,
    caption: "Los Laureles"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d439d589.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761624259&Signature=DdZd7b%2BLUDKcRF6463RXo7O1MbRxmc7ikHKzNbFOOgr2qksUMXgbuVJxA3qQrx2PcZVpDJL7wyR0nMA1aKsbxwMpzR%2Fs5AVN8KhVCSMv8rsUhxp7sg9uKepaHAj6tHO3p%2BW7OgYe3AT1xJUHloCTiDUjMcJLDRwadm37%2BEEFxbTEMTvbqDzwsGH2prw69kLHa2SY9mO5CR%2BzqwGlmg%2FiXcJYao2r9PjwQ1XkyITxhIYo2T%2FlV1AbYNPO5DmQtUCnSvxZ%2FQPUlM7r0nva7In52mpq8nuryEyifJJ6NauBP990IkwOZM0yoo0la6p%2FX8e3aB9xi43x9%2Bz3N6F%2FhbNBcg%3D%3D",
    alt: "Equal-sized restaurant image 3",
    width: 400,
    height: 400,
    caption: "Sebas Resto"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d433ca96.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761624259&Signature=O%2Fx5TwMCH6V1LsKYoy%2BDNzXMg4Xjdd1hLmIVKW6GieqqlCVlRvoMiKx%2ByxU4p7lG8pr82h%2BdBZYuJIzpfGeFNC4lcmex8WDdtii0QejdSdtLBYsCFr1qOWeIK%2F37dLsmnSooU2TXItd5iyXMzRMLsb%2BAUgyarkprLr5yYidhBMCYe21ceMg%2B83fnD4yaWYxYTGKToPcXcLIpie%2F4ZCQGgavHo6u70EhKdxvb4IaPTdDld1xy3iF7%2BZbOLdVBxExt6K6mi9AsBtkij3486kAZjhDptFqCMVhyG3JtkbixG%2FK3NLekP0uM7TQ0%2B1VlAXeVFd3fTGHWviFx2btrgsnFGg%3D%3D",
    alt: "Equal-sized restaurant image 4",
    width: 400,
    height: 400,
    caption: "Sebas Resto"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/673653582121f.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1763149529&Signature=m1UOYcG48S3acMaGN%2FVIQ1bI4e2YZ9vYXuLRu0o9g6M%2Blx%2F6meJZDdHyOY7dqlRfNWvF%2F8jlz9C1gyDzZUN8mR4UQbe1Jo8DNwvW257lXyjpfxjvRyTK9FofCrUWCX20%2BK5NyGEuHMvFkRiiipcTUxIHQvercAUUY8N8NGOGTHf797vWl9UzhI24yUZQXPf6UOnsVY9uR9eDmCiMzJ77tuMzuYyHOeQFFXfD03XCR0ldBLmsjFyfCX8JmxviRLcMchJACQsrBgED79mZdn4UHLewobTuPKUuFFZ9UKSn785ZmmgkCcytBzmxxDCTpfKN%2FKwicmR7o5%2Bw3DdFaxfD1w%3D%3D",
    alt: "Equal-sized restaurant image 5",
    width: 400,
    height: 400,
    caption: "Sebas Resto"
  }
]

export function RestaurantGalleryComponent() {
    return (
        <section className={`container mx-auto px-4 py-16 ${lora.className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8"
            >
                <div className="space-y-2 md:col-span-3">
                    <Image
                        src={images[0].src}
                        alt={images[0].alt}
                        width={images[0].width}
                        height={images[0].height}
                        className="w-full h-[500px] object-cover"
                    />
                    <p className="text-[20px]">{images[0].caption}</p>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Image
                        src={images[1]?.src}
                        alt={images[1]?.alt}
                        width={images[1]?.width}
                        height={images[1]?.height}
                        className="w-full h-[500px]  object-cover"
                    />
                    <p className="text-[20px]">{images[1]?.caption}</p>
                </div>
                <div className="space-y-2 md:col-span-1">
                    <Image
                        src={images[2]?.src}
                        alt={images[2]?.alt}
                        width={images[2]?.width}
                        height={images[2]?.height}
                        className="w-full h-[500px] object-cover"
                    />
                    <p className="text-[20px]">{images[2]?.caption}</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
                <div className="space-y-2">
                    <Image
                        src={images[4]?.src}
                        alt={images[4]?.alt}
                        width={images[4]?.width}
                        height={images[4]?.height}
                        className="w-full  h-[500px] object-cover"
                    />
                    <p className="text-[20px]">{images[4]?.caption}</p>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Image
                        src={images[3]?.src}
                        alt={images[3]?.alt}
                        width={images[3]?.width}
                        height={images[3]?.height}
                        className="w-full h-[500px] object-cover"
                    />
                    <p className="text-[20px]">{images[3]?.caption}</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
                <div className="space-y-2">
                    <Image
                        src={images[5]?.src}
                        alt={images[5]?.alt}
                        width={images[5]?.width}
                        height={images[5]?.height}
                        className="w-full  h-[500px] object-cover"
                    />
                    <p className="text-[20px]">{images[5]?.caption}</p>
                </div>
                <div className="space-y-2">
                    <Image
                        src={images[6]?.src}
                        alt={images[6]?.alt}
                        width={images[6]?.width}
                        height={images[6]?.height}
                        className="w-full  h-[500px] object-cover"
                    />
                    <p className="text-[20px]">{images[6]?.caption}</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
                <div className="space-y-2">
                    <Image
                        src={images[7]?.src}
                        alt={images[7]?.alt}
                        width={images[7]?.width}
                        height={images[7]?.height}
                        className="w-full  h-[500px] object-cover"
                    />
                    <p className="text-[20px]">{images[7]?.caption}</p>
                </div>
                <div className="space-y-2">
                    <Image
                        src={images[8]?.src}
                        alt={images[8]?.alt}
                        width={images[8]?.width}
                        height={images[8]?.height}
                        className="w-full  h-[500px] object-cover"
                    />
                    <p className="text-[20px]">{images[8]?.caption}</p>
                </div>
                <div className="space-y-2">
                    <Image
                        src={images[9]?.src}
                        alt={images[9]?.alt}
                        width={images[9]?.width}
                        height={images[9]?.height}
                        className="w-full  h-[500px] object-cover"
                    />
                    <p className="text-[20px]">{images[9]?.caption}</p>
                </div>
            </motion.div>
        </section>
    )
}

'use client'

import Image from 'next/image'
import { Lora } from 'next/font/google'
import { motion } from 'framer-motion'

const lora = Lora({ subsets: ['latin'] })

const images = [
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d4575be6.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=NcOFtMLAYMhkIdieOTOf2oxUqcF%2BePXFa%2FjzazuGa9Ey8VJYmRXUA%2Fl349eVTn4vrjONbb3tA3V0KtGGZIXi4NzNp5CfN8czvfkdG9Qp7UghUtWO%2BNLOq6eolr2UkONgqePJpVzTok6CK0YDpPm%2Fh%2BpWIkoinUfphAF9JIgyXD9xvDx%2BlIgUX1iEn4tSgN0eGyyLj2TZ4a4vFu7sMzuv77wOH%2BJwPUYiCe%2BARovm9tt6HOv4Q%2FsOPYldECHcqWsbhRC6vnax6k7%2BMO007su%2BvoH3bejYGRGL85I9E0Ij4XoHwFD5zKhqgQh5jbh8lnN9UzY81ABoLlkqQy3ZcmqS0w%3D%3D",
    alt: "Cafe Vivo table setting",
    width: 600,
    height: 400,
    caption: "Cafe Vivo"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d44d464f.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=gu4TkJ32oKDIa10rwUC8SFjsyL1xRNrL7uWQzQ9bauub0hc2HvuZ1K9QyzEqhrcslkKUu4105YfEXSzKFR0fmGKe3nfcWmZ9wdI6%2FI2p4%2BMDydY5edr6Mr7jv0001sW6Dh5QJtZm4OqUykWbgB6QOnFN0ft9F%2BIIDqVHPcKwUzuRjjz4mNbw0QIPVjaHFmYLsCNYA5NfBa94TImHZ%2B1fuTP2wE6uUjogqVarTPyKmFGkLiieXqmDfB3wAlpDbwPnAvAqJHfCA%2FrInaGfFN%2F15KnKT4aKiHSafUnuTMff%2F6m%2BiIQp5zv8azIWPY4Hp6LaISA6E6kXwQ%2BNHW%2FRdMqaqg%3D%3D",
    alt: "Indómitos dessert plate",
    width: 400,
    height: 400,
    caption: "Indómitos"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d45281c9.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Gi25886ANGj4%2FBYjZLawyyy5RiKWQoVf8sxT2tJJv5dXR0aPT1LpuA%2BvmWU5uSLNpOVM5NQ5m%2BcehfiyWRstrv8D2p%2FFjiXuQ6kyQwgChMMstuCzY6dH3H7xF9Os8hTHriGfwN%2BhH8K8O9wFDrPMyeTGvBmg6FRlyyLLlEgLyNVcvG%2FlnxAwz8jwZho8PVqt5lwV4E%2Buf7GByQXYTmI1BESQUBvQ9X2VxyiNSWhD%2F6obAjvjCOUGu%2BrCJ59lTrjfb93%2B5NdRWPae6ySSfnWlIv7guh2JfYVEnFD0yHMzskkQIcXA%2BjlEmYIUq8LtLNLaRoK0RE13d4fuL4KnQlvPSQ%3D%3D",
    alt: "Indómitos quesadilla plate",
    width: 200,
    height: 400,
    caption: "Indómitos"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d443e66d.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=j8tiUHDMLllNmUQ4CnFqCBKAxd9A4beyMrsT4bFt3ZYcVGoEcw1NOmvM0u5cpl4zK3X3O4tCPfzQ9V4IKub1yvgBhOLbaqEQbbJg%2F%2BJEXFZdE2Y%2Fh8uL8w3N9jc0YxHZyUiMllN7AxyiYTlJgIMEIKSJesLgfznPinDKQRjRJqQOAp%2FpVJTTrtOCRw%2BXe8zMdeZnwLwIwhPij73C7JN%2FuMhX5rY5rDwy98z2q8eB7ptrq2hax9WwangXEpjoJNRKqBW97RgoFRm337z%2FLXuKArCFywTL7snjvnvspP3hkPJITkxEfhUzoRz%2FIHxM2bjRVrIncxtLVB%2BPBVOsKiidkw%3D%3D",
    alt: "Large restaurant image",
    width: 800,
    height: 400,
    caption: "Indómitos"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d43e2643.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=Ak%2F88YDWRzcVblXvGbyPKlD68KCC0UDVlW%2F%2B8mvxPA1XwoYVS%2F0WbonH14WFhjUiZkBm5OYAf93Ylj31vBbViADUvsx98bhvbhIE6yJ58hhvyhQrSQu9c0gUMG5w9OHDkEOkURuoxw8bzkUa7KOTnxfVG2B5uJHGZK7teO4zWXDZtBUrKz91tuQe62DgXRU1MfmGDL9FyZkQR9iD0tOh7kluuFX4rNVGqmNr5PM6RBQuA9UHB72LHIjXm%2Fxb96NKBACxCPGcZNwjBpmT%2FOrk7ZnlfHvcqsWQercc%2FGBS0LbB6MBo5Ab503Tcr5IAsmJiJHXQzcdteRHCxFVnK0mz9w%3D%3D",
    alt: "Smaller restaurant image",
    width: 400,
    height: 400,
    caption: "Los Laureles"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f10cf23579.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=U9anBdcuPgwnpYl40ghN9CBeZ505WZbn3PmQmnjKecWWXS%2BlHVYD8RknyeC9PsQOvf4GztCPblKcqWEVL8zbrnXb%2BalaX3kw82ia52evBc6TIMocLzkA7mW3lXJs9%2FCZrZmMKyPVLRkRSF4zLj7RpxFoOaukCmh4UGda1ESm8VaUzadSBUlXpc%2FyDBn0%2F9Dn94m13zlL73WplUEwMnYPXUlod3mDCcQ%2FKfseHjJwXumaKPxQzRMtJAjZlqlA2QLip11ci1GI%2FuD0nY4sqw2OkaOCZFwgKElU4YR1OhIiX58vatolgSxOESpQV54oUFqBprPuCo47RmxNB3QkwnHCYw%3D%3D",
    alt: "Equal-sized restaurant image 1",
    width: 600,
    height: 400,
    caption: "Los Laureles"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d42ac32b.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=yDVu%2Ba70yaWokWEeb95j3%2BPxaVOi6tPm2q%2BhfS6%2Fuyq683JcxnVyfArYpVDL0%2FgMBnoX7cEVy8BLopyT0Jk1ne9V7fy%2Bn4k6Eh2g8UAlhS8HQFJro7lOxMBQDVb5jPao7mIAe3CqTRaqsDX7NUF3jEc5HsLucDWbyZEMkmqfpQR6KFmzM6OIvOec%2FrxR3Gvjncg%2FnjvzQBi74Qdid6qpfKy1LS203g5pTmNQYE1Y46d%2FF37DRnuAXM3LexmaMIojbSvtktMjVyR892WdyzqybnkZQw7pejFkPBgfRfsu6Z9RkhnrF1P%2FltXPoh08S8poUBvSX%2Bbbc9JLBDPycYbDYw%3D%3D",
    alt: "Equal-sized restaurant image 2",
    width: 600,
    height: 400,
    caption: "Los Laureles"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d439d589.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=VY%2FbT5MtBoFDMSuDSmONLLYTooF6aUvq7KpxCl4P3PxZQ3IESiXOKkDeqZTKZlVgjbIF19b7WJobKrMiAbzztMzVm8tjjdVcNr25wYP%2BZ9dZGxV135zwcbrYoSyVi5r581jdoLAI2iVM7ZduyRJwxH3GaFAWJhhOKCJCsBWv7bzonWPnwujCZ%2BEdS7y8wECU3BFmW36KMjbgxZZxYk7Tc52mymkkG4bkvdLo7BHHK6nmi%2FrjVacYt1cFnxeCjvpC7HVYt1uucE7Zv%2FtSxB9IcP5%2BpJp%2FBh3wmaeKcARlyf4WTJdvvFh6Q%2FhbmdF%2FtlmZk14IjMaoSaXz6GhO%2Fm0Y8w%3D%3D",
    alt: "Equal-sized restaurant image 3",
    width: 400,
    height: 400,
    caption: "Sebas Resto"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Live%20in%20Uvita/671f0d433ca96.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=ktoltRlDQktXrLJancPC2jFmlwZvkonT5UMSeIUQ9UUhInEoXyEtBmrogcd5ZHwWvguiTqduCkEsS8UdJneexDzR9peTsg8HpR%2FhtJhFRAFpLUxVIL1t%2BEd997%2B5T8xSgi0klSow8a%2BP4LrR9Sn%2FMxGPGqttXeWC%2By2Bm1DkTV1dLipPfjp1UldujXBIj0PwE4JFqeLeLJCBZ8nPsZmNkE8G9P2wJqTFrJ3CwtQkiL8ytIPRelrR1yOsdDv55t%2FxoE8s4lajY5m28JxwqMLQjqMgMMQdxDnCWCm0qvimt7IrLn%2F4sreP%2Bq2qs3ei36NB%2FsgJtdwWvuPBdz3s3pe0gg%3D%3D",
    alt: "Equal-sized restaurant image 4",
    width: 400,
    height: 400,
    caption: "Sebas Resto"
  },
  {
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/673653582121f.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=DNVkhfMyoPNgeZgkuOCs9nQUXD%2BrNcvlPeg%2BDLQZGVRlE3um4m9G3FjM0f8i1CZceV3nxcHoHmXD%2FCp6iBxAdDb%2B1yq056SfI0QZ%2BC14m9qfaLibi9lZ%2FTWOVWRnrrLCv3%2FeIJmF9ZeiAjiRJjW9e5%2FvEUOLHseK6M67dxrXQ6eNiP%2FHhBGclLcKgqxNcgJsLkmR7%2BepLYKFuxPMbQ4Q7m7333MDbk7nS5qPiaXEapTWeuQRn6G%2BtpTJsyRT9H7%2F4Gamd7d0zes9EjEFjo%2BeGNQdjEOEyLPnoPrYlikpOs2I3k%2BoQzwDJurlbBoRt2IXXFfwhZUxipGCAjkK1LQ%2FLA%3D%3D",
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
                        unoptimized={true}
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
                        unoptimized={true}
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
                        unoptimized={true}
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
                        unoptimized={true}
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
                        unoptimized={true}
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
                        unoptimized={true}
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
                        unoptimized={true}
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
                        unoptimized={true}
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
                        unoptimized={true}
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
                        unoptimized={true}
                    />
                    <p className="text-[20px]">{images[9]?.caption}</p>
                </div>
            </motion.div>
        </section>
    )
}

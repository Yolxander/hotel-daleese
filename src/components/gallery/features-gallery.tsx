'use client'

import { useState, useEffect } from "react";
import NextImage from 'next/image'; // Renamed to avoid conflict with browser's Image constructor
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Preload image function
const preloadImage = (src: string) => {
  const img = new window.Image(); // Using browser's built-in Image constructor
  img.src = src;
};

const galleryItems = [
  {
    id: "215",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401da32d86a.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=vRII2ih7H%2FNDIrSgK%2FfuINAWvMzVOrBiQvETNP7SmCwjW3Y%2F14oBn2H0XPpuyyc8jj5tEDJBfASNK6jrSWotzyXOL6DbpeQCwUhuvowJ5ch2%2BUZ8b6sKZGUHiiZptw%2F2cPQguH834qIb3uXVEww62n6emXnkz%2FBWAyoBbwkcGdjUGm7KmRzKr9pV6VatcLxhH12XksNrOZrKjH42IMC9%2FI1xAUA8JC6Yt39g%2F3mwXXmCIkIo6x5gYym4R0%2BToh%2BGFHTQmI0NB%2Byx7O7HWEI6T0tZbUpvxezHbS55vPB8EFlPrAjej332YNSgy0vM55V3JCC1nu5zmVgSUOSzB1DKGw%3D%3D",
    alt: "IMG_4145.jpg"
  },
  {
    id: "216",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401da3cfbfd.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=HgW4Al%2Bdw5rUqY%2FdwZTz7nrvGmSL1Lxc%2BoJTF7EioD%2Bqo1Cjr3T3xz%2BET7PIxKUUbqL1erzpqEQYoXebODwVLu1b57rcFFYc38czLZJK86y%2BCRy3GsEK86Q075Hc45kST3Hqn9KZXCqhgd6yv3GMaFDixRAbDwA0mssVG%2FqM48ZcrbBv3SyiZDpcKOUh8KNEkz%2FFymABoVxzfVQIeye8hM%2BjqOgDIU7mMHD%2FVLyspPwCE9FzaQOscPaq02PETGXeK688kK8CbvWKMPcWJiAvDLrg%2FyiYGubyQIgFjCydJlRBxN5AKF4VTFKkR9%2FAtGXgjVv8b%2FOKtrNn0NQ1i087uA%3D%3D",
    alt: "IMG_4150.jpg"
  },
  {
    id: "217",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401dce55738.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=NZgHI2Hc5EkWJNCjLZxHfawHyPo%2F1Y1dGXrbdcQ5Ob2XgQgQ%2F5GwW4AY1vcpipdkaZh3E8DkxnoKjIBGae7CDc%2F%2FFoj0XxjWXUm%2F%2FKYJrjMzjoEnDwBQQb8k3Q5MT99Hc5nb%2BEHCiYN8GyYHxOLUa97HtlvIZg%2FBwiJ7fo2F0Rnq%2BYAl13bOyWdUCQjv7iJdccqTkQGH5y6ZAtmM%2FNUioGDzikSonBg%2BE72tsidxk43c6FH%2Ffd9c3Y6swpc5zueN3e1xCcBxLIJVl1F7CQQZL5dO59q6dJETZ3kILrzjqRVLrxALnnmRhOie83bSWQl8DNPafeOfbADJJwtdhJuPIA%3D%3D",
    alt: "2.jpg"
  },
  {
    id: "218",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401dcede7b0.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=fWGIZPDiJqtlg66vvW3dRfp3U3%2F%2F6UtqYgYpC9c%2FEIeQZ969bwEkQKqc2iE7X9Fp36cWgJPmn7%2FSnc2w2LIgv0TOK2RgUBbo0xcE34bG1ews3CNtjIhypcQZnKR9klZgAKGc238DSMphC0RO15DU7sJUoFwwdRxyVnrJY6OijeDNi2WACJBUSDtM2%2Bbhah4WkxkIRAXlBGP211A%2BurwECy2VR18hwEUEmbs7JUYGmx1jQgo0pIu%2B19IpNs1c%2FHyniNvJehxgZa57%2F9kakwtlZZAuLv8bdLCJOX3ykWZcQlXA8F3MpMi%2BcC6xOT%2FI1sK6xLnDz1r83X5LXT3pX%2B6MKw%3D%3D",
    alt: "3.jpg"
  },
  {
    id: "219",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401dcf662dd.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=lqWnen3mnzlHPVbGIrfAX18X7ZRF9q4JIlK1FGEUkbTJy4lGq2%2Fd4I8OE3efyY%2FoBEwqEy134Rlk50McQ9DLLlse4HFUcl5mZcfAHzIloNWHheICnioCCKLnsDlCBZ0PPJot7Ig6U7ZORxSQ9ChAlEmr7hW7Zx%2FaqZ6CVZ0IxXuEe08HAA%2BvlHkMRdd9LgxAD%2BIsLvIKsKlMrrubOZ4ae5%2FWWs2kcUOVl%2Bl5CoBv3haUqIhx%2F4va6nMbvKe0kzBNm2odc1vA8wqbY9L3GHoaMaSwTX4SMBOPtFaDqZOOL1AQQ1NIw3Ykl14m5uurBZYIcw2lT1RSBg%2BokAAOcCAQcg%3D%3D",
    alt: "4.jpg"
  },
  {
    id: "221",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/67401e51161d4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=ix8E%2BklOLvKvTpbbVjqt8kPLb3vf%2FwrNGrxizXGFERdxJEsdBXh7jbtj0jyaLEGrrfaCjrcE0WRiVFEzokfGzkjSfx8g6Kf8Xov7smqH4Kzi9%2F8pq8kRhP8NyV0AiOe2A5izAQULBcTW0AD5LOyCsT3stFHBUAj4ml%2BmNjiubhOGyj%2FmY2OJVWQKqNZHiKEbLY26RurZ1i2iJvKZtU80TYeX9PCiojucqsSp15N8R2fk36eY75FeOYuf1YnWLZWuMGD51zuzdFDFphlDOHKouRd3MDBzBkEws%2Fw%2BltgF8e%2FRuweIXhVafdHYPFb0o%2BqKjGJsr5uuvW5sSqFZTuA8VQ%3D%3D",
    alt: "IMG_4730.jpg"
  },
  {
    id: "222",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e5fb6e5b4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=TPGeAYCzyeQ13Nd%2BIypE9E9AqwITt1eUZ%2BlobLAH63m9ezkT8T29AmUTQL4YwXSDUBj3mgPHU4tfwAfAXzQfels%2BpEWdT8aTFCeeYWUcZO8FqUMwiro9662y%2BcLJKCoFGL0VwUQ%2FC2rKBqAYURpN9XixjGth%2BBzI%2BvUJnMOfBsQoK3Mh3wOjxTcLv6ywZmEsFRjlstWQLpxn4sQcdWDH9m4lzMab%2FwiAIV2VDemrJULObX3AV1aNl%2F%2FdpKlY1N1w2VNVlV87pt0UOkGi0ZnxV5Lw0nnYVarQWRMKPMTjK227JqZfAMBA1t5uMOu64GNzafjj1h3tULs1OOK8bYWMkQ%3D%3D",
    alt: "IMG_3946.jpg"
  },
  {
    id: "223",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740eeff3860c.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=UKsmTPdirE%2BaRD3yXATrsxfj1Sb97f6lozFGUMYX29LstOVp6iEKXHmA5fddpp0lOXqcOIBSkO2Yp%2FXr27MKXz5xf%2BEF6ve9KSpInmLHBgUkGefNfGuuzuVCO6WWAQW23hdQiRcxx%2FiDgBfeXGq%2BA7c7WM4u15owcPX%2F7pX3cBd%2F5P0bIPXqfUVeLaTZoa7wqxG5a0zQVvnzHRi5c9klUZObinCWrJELAiXILXvgD5mY9GWwFQSv6nc2whH68Yo0ULgfzecBQMc56TMbh%2BCVPE1SY1HiuGkNcfe4ro%2Fv5nlxFLsnk26EYDSVjBqe0c9wf%2FUoYEtJPiHyRSNW9xaKDw%3D%3D",
    alt: "IMG_4145.jpg"
  },
  {
    id: "228",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e80de5967.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=jvDYmsEkbva4mqNpVhggjwwIu%2FJQzrFH%2F5F%2Fy84qKBiOudibYXZZk1Obtre5%2FA3IdwJ9LtD%2Bokz9Z88pqwjvlfYyUFVvUTY3%2Fmke0Mf5rW2%2Bmk91YvK8tvcu9OMhNDFDiTruZ7XTsokHpk%2BdsCjCzYhJNSUGklzVB5GLNdK%2FqFI6wbeafdsOFsoOJt4t%2FKLZkmVON9c58I35HD5DXZEDU%2BiXuYB9VXzI5YHdR9%2Bz93AmQheeP50%2FFEMYz4Aw%2B0mQd6caEI1pdkwJhQ4FOaNoJRkobESAfPe8I04Lj7rsbA7VMOBZSGLk6d7tjcy7E0erQQ3lp97088FP5eS6h3%2FNDw%3D%3D",
    alt: "g.jpg"
  },
  {
    id: "229",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e90926e16.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=SRx%2BWrdDhfMmONuBoy0uYPHqEfg8TSXV6KKJWpQ6XjYtETzuhmOs8NPCaUNbLkxcLwIcc3uUDR%2BSsI8%2BTQetFzqqsRrKRPaeitEICsrkC4iBaiWk18xZ4GoPwqRyzbUWGLsF4e111XW%2BBSdJLWgjNCkvFuer%2BxPDcF%2F0NmAi%2Fb4Wz0TIVH7kr8XkqJs6SccTldX7wsa8Wl%2BGD%2BUrxREkY6%2FTxgFH9J0ewIJ%2BovgznHzgoJY%2F1ev6aWADhD%2F%2F2KbuuC2ru2hntLVGrgGYQROojEbxWAJ0iHOZj8KX17YO9r2zPQknAaGgAPFZya072zFqgrKkTD1Omn63aOGZ5a5YCQ%3D%3D",
    alt: "IMG_4361.jpg"
  },
  {
    id: "230",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740ef3066d53.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=TM0razQPhQj%2Fs7J4n21eJHPj9nBQtZGjP2DQOEuzL33NrR5sxjLQAH4tVKaEE1qyfrk9JazF1JVvCxWOhc%2FLfks5lJLg9NBEDpEBw6HYNZkonokgUrb%2BrEVTcwjtsloh%2Bw3wvLEbjMm051e0BsmOUT7x%2BZDMnD7myIszZB%2FeyyhKyIvrD59CHxDvsqTO7zZLG9XH5gOA7MzBJoY3A%2BGIVFmMskmolr%2Bpwdcbsu1z6lE3eTEyFlBFUXNpbDGYmJJJM2Ly7WYxdUQTq0de5Ab%2FnhPa7anPehrYW2BssCRYVIgAToZ6khRntWyzczYN%2BgNWDdQmH0P8T0nuvb1gsoAweg%3D%3D",
    alt: "c.jpg"
  },
  {
    id: "224",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e60a653fa.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=DCmKZ99e4EZv8Dvkc1wUqx3bjZGdXmnaaWzD4K2irTet5qpgATTY602y9Zr%2B607FOOgRzvLaQVJJcdoU1%2BKaRfi1C5quLYDcdX%2BOolWV8zA0FJ8FkBP23lIVDktiEcKX%2FAf3rMHqrI0sAd1Ra9Mam1AeadMbFzVmX3ApcOxXxPDUz7iERz%2FrmCDSTpQSgYtzPHyvkTIrtDzpBEgEt2P25UOg%2B9qqR2f8ZGt2ROcujaw0DupYLuDy0KJPwP8vIx6JIQtfY9zH8setvD2gtVg9K17VOsZSVudt6yaKUMu57N%2Bu30xEWTbi6evyQH15ax%2BjO%2BChj90V5%2BiDnax8xP12hw%3D%3D",
    alt: "IMG_3921.jpg"
  },
  {
    id: "225",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e645b4bb7.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=ItahwRfEP8ob5lgjjNmtjP9cC9w4a4ll2fFdHkP0OVOQviYP51QnQS7%2F7CE%2BKtto7SimJcjgHK7cXTnqmvV7VAL1NE1PsYZCrC2w5Uwr4Q4AC9jMZaUX0YzEkYjXrgIqgkCbu%2F198heNR03tkSQxdBGX4gEs0VwXM4pyGlzO259ITJesTlQGkm9oeUKFY4QKg5PmgY13Hvmc60%2BDIjGsao56nQLXtgi6h25Q0KLkqx2bjYRxchnMExs1hD83UZLGA8Q%2F0PngsIg2zdnFQUGFK4V1ptWabL54SPCU3EwCp2j7rM2bvvhOpQzUicdq%2Fqnlc4KigDbX%2BOMUFQnYPlKJ7g%3D%3D",
    alt: "IMG_4172.jpg"
  },
  {
    id: "226",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e6464b792.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=yuEUlxjdYjvHHDSHoAXI9fE%2FSWHIngS49thIHU3N9Wq%2Fxq0%2FqnIiR4jvuXScfKEZzcnlOFLgLdSpUc1rrN4zbitEKsQ5pM5xpxf%2FZM8kJvjaSQgKEig4GMpjZmFitCe0506KJu0ABwkjMlNf4pQRuVYau9Mbax52Zm6Op8%2BqWK7YmysReOAupiG%2BEo4meuoLE8xPYI6b4cdf1rPf9Q%2FgYj6pOeuC2pB01CqsoAkNKfWEt8ahGb22OfXOfQNcyxcQcFngGK9Q9JMRt8O%2FrOm9rUMHmMluQ%2FlpU7xCdgzeYSEdpHUIfAFmItIXfYxmO35KzlDNw8uTZ0%2BIOeIrrx%2BvIA%3D%3D",
    alt: "IMG_4255.jpg"
  },
  {
    id: "227",
    src: "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/6740e66acde62.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=GvEwrlgq8DvHmQpQwSu%2B9zQr8zUIf9Ee%2BEQO%2Bj%2Fp%2FlUahq%2FXXFbP9ZNWNV4%2F9Pri60n40R9FT2Ic3lInkf29ailMzMXXreIuurxXID12%2FkiTZkBGWszFO7bDTUap9w1VE%2FDGpHhB2Dh%2F9Y1PBgWPX9ozOWF%2FLrG%2FIzkasXd4JplusnduTvBRUak5LYfVK1ZxCQuIIX8UbePWexmDvyzzql8CQveOHDK2V0TWDV24iJoIHwE47TdcQeSKyRi2hclep9I8oZabVyKpqGdZYCZM72c8MFBsG6ka7H0vOP6cSWp9y7cpUHPcGfmBnKDoE4PShsfHLTq9tGfVgq0n89n8yw%3D%3D",
    alt: "IMG_4880.jpg"
  },
];

// Lightbox Component
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Lightbox = ({ currentIndex, onClose, onPrev, onNext }) => {
  // Preload adjacent images
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    preloadImage(galleryItems[nextIndex].src);
    preloadImage(galleryItems[prevIndex].src);
  }, [currentIndex]);


  return (
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
              className="absolute top-[95%] left-8 md:top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform hover:scale-105"
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
                  loading="eager"
              />
            </div>
          </motion.div>

          {/* Next Button */}
          <button
              onClick={onNext}
              className="absolute top-[95%] right-8 md:top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition-transform hover:scale-105"
              style={{ height: '120px', width: '120px' }}
          >
            <ChevronRight className="h-[80px] w-[80px] text-white" />
            <span className="sr-only">Next image</span>
          </button>
        </motion.div>
      </AnimatePresence>
  );
};

export function FeaturesGalleryComponent() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
  };

  useEffect(() => {
    galleryItems.forEach((item) => preloadImage(item.src));
  }, []);

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
                  <NextImage
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      unoptimized={true}
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
                  <NextImage
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      unoptimized={true}
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
                  <NextImage
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg"
                      unoptimized={true}
                  />
                </motion.div>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {galleryItems.slice(12, 15).map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="aspect-[3/4] cursor-pointer"
                    variants={itemVariants}
                    onClick={() => openLightbox(index + 7)}
                >
                  <NextImage
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      unoptimized={true}
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
                  <NextImage
                      src={feature.src}
                      alt={feature.alt}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      loading="lazy"
                      unoptimized={true}
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

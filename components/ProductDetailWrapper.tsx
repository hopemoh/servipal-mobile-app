import React from 'react'
import { Image, Platform, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native'


import { HEADER_BG_DARK, HEADER_BG_LIGHT } from '@/constants/theme'
import { ImageProps } from '@/types/marketplace'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { router } from 'expo-router'
import { ArrowLeft, ChevronLeft } from 'lucide-react-native'
import Swiper from 'react-native-swiper'



interface ProductDetailWrapperProp {
    children: React.ReactNode
    images: ImageProps[]
}

const ProductDetailWrapper = ({ children, images }: ProductDetailWrapperProp) => {

    const bottomSheetRef = React.useRef(null)
    const theme = useColorScheme()
    const HANDLE_INDICATOR_STYLE = theme === 'dark' ? HEADER_BG_LIGHT : HEADER_BG_DARK
    const HANDLE_STYLE = theme === 'dark' ? HEADER_BG_DARK : HEADER_BG_LIGHT
    return (


        <View className='flex-1 bg-background'>
            <Swiper
                autoplay
                autoplayTimeout={3}
                showsPagination={false}
                loop
                showsButtons={false}
                bounces={false}
                removeClippedSubviews={false}

            >

                {images.map((image) => (
                    <View key={image.id} className='h-[45%]  w-full overflow-hidden'>
                        <Image
                            source={{ uri: image.url }}
                            style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </View>
                ))}

            </Swiper>

            <TouchableOpacity onPress={() => router.back()} className='absolute top-10 left-6 rounded-full p-3 bg-input'>
                {Platform.OS === 'ios' ? <ChevronLeft color={theme === 'dark' ? 'white' : 'black'} /> : <ArrowLeft color={theme === 'dark' ? 'white' : 'black'} />}
            </TouchableOpacity>
            <BottomSheet handleIndicatorStyle={{ backgroundColor: HANDLE_INDICATOR_STYLE }} style={{ flex: 1 }} handleStyle={{ backgroundColor: HANDLE_STYLE }} snapPoints={['55%', '70%']} index={0} ref={bottomSheetRef}>
                <BottomSheetScrollView className={'bg-background flex-1'}>
                    {children}
                </BottomSheetScrollView>

            </BottomSheet>
        </View>

    )
}

export default ProductDetailWrapper

const styles = StyleSheet.create({})
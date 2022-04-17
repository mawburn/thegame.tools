import { ImageLoaderProps } from 'next/image'
import { baseConfig } from '../baseConfig'

export const imgLoader = ({ src }: ImageLoaderProps) => `${baseConfig.imgBucket}/${src}`

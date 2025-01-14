import React, { SVGProps } from 'react'

function NestjsIcon({
    width = 256,
    height = 256,
    fill = '#f4f2ed',
    ...otherProps
}: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            {...otherProps}
        >
            <g fill="none">
                <rect width={width} height={height} fill={fill} rx="60" />
                <path
                    fill="#e0234e"
                    d="M146.728 18c-1.556 0-3.001.342-4.335.799c2.835 1.939 4.391 4.506 5.169 7.415c.056.399.167.684.222 1.083c.056.343.112.685.112 1.027c.222 5.02-1.279 5.647-2.335 8.613c-1.612 3.822-1.167 7.928.778 11.237c.167.399.389.855.667 1.255c-2.112-14.431 9.616-16.599 11.784-21.105c.166-3.936-3.002-6.56-5.503-8.385c-2.39-1.483-4.558-1.939-6.559-1.939m17.676 3.251c-.223 1.312-.056.97-.111 1.654c-.056.457-.056 1.027-.112 1.483a13 13 0 0 1-.389 1.37c-.111.456-.278.912-.444 1.368c-.223.457-.389.856-.612 1.312c-.166.228-.278.456-.444.685l-.334.513c-.278.4-.556.799-.834 1.14c-.333.343-.611.742-1 1.027v.058c-.334.285-.667.627-1.056.912c-1.167.913-2.501 1.597-3.724 2.453c-.389.285-.778.513-1.112.855c-.389.286-.722.57-1.056.913c-.389.342-.667.684-1 1.084c-.278.342-.612.741-.834 1.14c-.278.4-.556.8-.778 1.198c-.223.457-.389.856-.612 1.312c-.166.457-.333.856-.444 1.312c-.167.514-.278.97-.389 1.426c-.056.228-.056.514-.112.742c-.055.228-.055.456-.111.684c0 .456-.055.97-.055 1.426c0 .342 0 .685.055 1.027c0 .456.056.912.167 1.426c.056.456.167.912.278 1.369c.167.456.278.912.445 1.369c.111.285.278.57.389.798l-12.784-5.076a135 135 0 0 0-6.448-1.711l-3.502-.856a101 101 0 0 0-10.116-1.54c-.111 0-.166-.057-.278-.057a97 97 0 0 0-9.949-.514c-2.446 0-4.891.114-7.281.286c-3.39.228-6.781.684-10.172 1.255c-.834.114-1.667.285-2.501.456c-1.723.342-3.39.741-5.003 1.14l-2.5.685c-.835.342-1.613.742-2.39 1.084l-1.835.855c-.111.057-.222.057-.278.114c-.556.286-1.056.514-1.556.799a3 3 0 0 0-.39.171c-.61.285-1.222.627-1.722.913c-.39.17-.779.399-1.112.57c-.167.114-.39.228-.5.285c-.5.286-1 .57-1.446.856q-.75.427-1.334.855c-.389.286-.778.514-1.111.799c-.056.057-.111.057-.167.114c-.333.228-.722.513-1.056.799l-.111.114l-.834.684c-.11.057-.222.171-.333.228c-.278.228-.556.514-.834.742c-.056.114-.167.17-.222.228c-.334.342-.667.627-1 .97c-.057 0-.057.057-.112.114c-.334.285-.667.627-1 .97c-.056.056-.056.113-.112.113c-.278.285-.555.57-.833.913c-.111.114-.278.228-.39.342c-.277.342-.61.685-.944 1.027c-.056.114-.167.171-.223.285c-.444.456-.834.913-1.278 1.369l-.167.171c-.89.97-1.834 1.94-2.835 2.795c-1 .913-2.056 1.768-3.112 2.51a42 42 0 0 1-3.335 2.167a34 34 0 0 1-3.502 1.711a39 39 0 0 1-3.613 1.37c-2.334.513-4.724 1.482-6.78 1.653c-.446 0-.946.114-1.39.172c-.5.114-.945.228-1.39.342l-1.334.513c-.445.171-.89.4-1.334.628c-.39.285-.834.513-1.223.798a9 9 0 0 0-1.111.97c-.39.285-.779.684-1.112 1.026c-.334.4-.667.742-.945 1.141c-.278.457-.611.856-.834 1.312c-.278.4-.556.856-.778 1.312c-.222.513-.445.97-.611 1.483c-.167.456-.334.97-.5 1.483c-.112.456-.223.913-.278 1.369c0 .057-.056.114-.056.171c-.111.514-.111 1.198-.167 1.54c-.056.4-.111.742-.111 1.141c0 .228 0 .513.056.742c.055.399.11.741.222 1.083c.111.343.223.685.39 1.027v.057c.166.342.388.684.61 1.027c.223.342.445.684.723 1.026c.278.286.612.628.945.913a8 8 0 0 0 1.056.913c1.334 1.197 1.668 1.597 3.39 2.509c.279.172.556.286.89.457c.056 0 .111.057.167.057c0 .114 0 .171.055.285c.056.456.167.913.278 1.369c.111.513.278.97.445 1.369c.167.342.278.684.445 1.027c.055.114.11.228.166.285c.223.456.445.855.667 1.255l.834 1.198c.278.342.612.741.945 1.083c.334.343.667.628 1.056.97c0 0 .056.057.111.057c.334.285.667.571 1 .799c.39.285.779.513 1.224.741a9 9 0 0 0 1.278.628c.333.171.722.285 1.112.399c.055.057.11.057.222.114c.222.057.5.114.723.171c-.167 3.08-.223 5.989.222 7.016c.5 1.141 2.946-2.339 5.392-6.332c-.334 3.936-.556 8.556 0 9.925c.61 1.426 3.946-3.023 6.836-7.928c39.408-9.355 75.37 18.595 79.15 58.066c-.723-6.161-8.115-9.583-11.506-8.727c-1.667 4.22-4.502 9.639-9.06 13.004c.39-3.764.223-7.643-.555-11.407c-1.223 5.247-3.613 10.153-6.893 14.373c-5.28.4-10.56-2.224-13.34-6.16c-.222-.171-.277-.513-.444-.741c-.167-.4-.334-.799-.445-1.198a4.8 4.8 0 0 1-.333-1.198c-.056-.399-.056-.798-.056-1.255v-.855c.056-.4.167-.799.278-1.198c.11-.399.222-.799.389-1.198c.222-.399.389-.798.667-1.198c.945-2.738.945-4.962-.778-6.274a6.3 6.3 0 0 0-1.056-.57c-.223-.058-.5-.172-.723-.229c-.167-.057-.278-.114-.444-.171c-.39-.114-.779-.228-1.168-.285a4.1 4.1 0 0 0-1.167-.171a9 9 0 0 0-1.223-.114c-.278 0-.556.057-.834.057c-.444 0-.833.057-1.222.171c-.39.057-.779.114-1.168.228s-.778.229-1.167.4s-.722.342-1.111.513c-.334.171-.668.399-1.057.57c-12.95 8.67-5.224 28.976 3.613 34.851c-3.335.628-6.725 1.369-7.67 2.111l-.111.114c2.39 1.483 4.891 2.738 7.504 3.821a180 180 0 0 0 9.004 2.738v.057a52.4 52.4 0 0 0 14.007 1.027c24.623-1.768 44.799-20.99 48.468-46.316c.111.514.222.97.333 1.483c.167 1.027.389 2.111.501 3.194v.058c.111.513.166 1.026.222 1.483v.228c.056.513.111 1.027.111 1.483c.056.627.111 1.255.111 1.882v.913c0 .285.056.627.056.912c0 .343-.056.685-.056 1.027v.799c0 .399-.055.741-.055 1.141c0 .228 0 .456-.056.741c0 .399-.056.799-.056 1.255c-.056.171-.056.342-.056.513c-.055.457-.111.856-.166 1.312c0 .171 0 .342-.056.514c-.056.57-.167 1.083-.222 1.654v.114c-.111.513-.223 1.084-.334 1.597v.171l-.333 1.54c0 .057-.056.171-.056.228a16 16 0 0 1-.389 1.541v.171c-.167.57-.334 1.083-.445 1.597c-.055.057-.055.114-.055.114l-.501 1.711c-.222.57-.389 1.084-.611 1.654s-.389 1.141-.611 1.654c-.223.571-.445 1.084-.667 1.654h-.056c-.223.514-.445 1.084-.723 1.597a3 3 0 0 1-.167.4c-.055.057-.055.114-.111.171c-3.613 7.472-8.948 14.031-15.618 19.165c-.445.285-.89.627-1.334.97c-.111.113-.278.171-.389.285c-.39.285-.779.57-1.223.855l.166.343h.056l2.335-.343h.055c1.445-.228 2.891-.513 4.336-.798a9.5 9.5 0 0 0 1.223-.285c.277-.058.5-.114.778-.172c.389-.057.778-.171 1.167-.228c.333-.114.667-.171 1-.285c5.559-1.369 10.95-3.251 16.119-5.476c-8.837 12.378-20.676 22.36-34.516 28.919c6.392-.456 12.784-1.54 18.953-3.365c22.4-6.788 41.243-22.246 52.526-43.065c-2.279 13.176-7.393 25.725-14.952 36.676a88 88 0 0 0 14.841-12.662c12.45-13.347 20.621-30.288 23.4-48.483a93.1 93.1 0 0 1 1.612 27.492c40.131-57.438 3.335-116.987-12.061-132.672c-.056-.114-.111-.172-.111-.286c-.056.058-.056.058-.056.114c0-.057 0-.057-.056-.114c0 .685-.056 1.37-.111 2.054a78 78 0 0 1-.556 3.821c-.278 1.255-.611 2.51-.945 3.765a48 48 0 0 1-1.334 3.65a50 50 0 0 1-1.667 3.48c-.612 1.084-1.279 2.224-2.001 3.251a44 44 0 0 1-2.279 3.08c-.834 1.027-1.723 1.94-2.612 2.852c-.556.514-1.057.97-1.612 1.426c-.445.4-.834.742-1.279 1.14c-1 .8-2.001 1.54-3.112 2.225c-1.056.685-2.168 1.37-3.28 1.94a95 95 0 0 1-3.501 1.597a39 39 0 0 1-3.613 1.198a44 44 0 0 1-3.724.855c-1.279.229-2.557.343-3.78.457c-.889.057-1.779.114-2.668.114c-1.278 0-2.557-.114-3.78-.229c-1.278-.114-2.556-.285-3.779-.57c-1.279-.228-2.501-.57-3.724-.97h-.056c1.223-.114 2.446-.228 3.669-.456a39 39 0 0 0 3.724-.856a39 39 0 0 0 3.612-1.198c1.223-.456 2.39-1.026 3.502-1.597c1.167-.57 2.223-1.197 3.335-1.882c1.056-.741 2.112-1.483 3.113-2.281q1.5-1.198 2.834-2.567c.945-.856 1.779-1.825 2.613-2.795a56 56 0 0 0 2.334-3.08c.111-.171.223-.4.334-.57a71 71 0 0 0 1.612-2.739a40 40 0 0 0 1.667-3.479a41 41 0 0 0 1.334-3.65c.389-1.198.667-2.453.945-3.708c.223-1.312.445-2.567.556-3.821c.111-1.312.222-2.624.222-3.88c0-.912-.055-1.824-.111-2.737c-.111-1.312-.278-2.567-.444-3.822a43 43 0 0 0-.834-3.821c-.389-1.198-.778-2.453-1.223-3.65c-.445-1.199-1-2.396-1.556-3.537c-.612-1.14-1.223-2.282-1.89-3.365a63 63 0 0 0-2.223-3.138c-.834-.97-1.668-1.939-2.557-2.909c-.445-.456-.945-.97-1.445-1.425a103 103 0 0 0-7.726-5.59a10 10 0 0 0-1.112-.57c-1.834-1.199-3.557-1.826-5.28-2.396"
                />
            </g>
        </svg>
    )
}

export default NestjsIcon

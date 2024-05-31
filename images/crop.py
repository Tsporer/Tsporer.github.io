from PIL import Image

def crop_to_square(input_path, output_path, top_left_x, top_left_y):
    # Open image
    image = Image.open(input_path)
    
    # Get dimensions and crop
    width, height = image.size
    size = min(width - top_left_x, height - top_left_y)
    cropped_image = image.crop((top_left_x, top_left_y, top_left_x + size, top_left_y + size))
    
    # Save image
    cropped_image.save(output_path)

if __name__ == '__main__':
    input_image_path = 'robot.jpg'
    output_image_path = 'robot_cropped.jpg'
    top_left_x = 63
    top_left_y = 0

    crop_to_square(input_image_path, output_image_path, top_left_x, top_left_y)


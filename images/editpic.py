from PIL import Image

def crop_to_square(input_path, output_path, top_left_x, top_left_y):
    # Open the image
    image = Image.open(input_path)
    
    # Get the dimensions of the image
    width, height = image.size
    
    # Calculate the size of the square
    size = min(width - top_left_x, height - top_left_y)
    
    # Crop the image to a square
    cropped_image = image.crop((top_left_x, top_left_y, top_left_x + size, top_left_y + size))
    
    # Save the cropped image to the output path
    cropped_image.save(output_path)

if __name__ == '__main__':
    input_image_path = 'robot.jpg'
    output_image_path = 'robot_cropped.jpg'
    top_left_x = 63  # Change this to your desired x-coordinate
    top_left_y = 0   # Change this to your desired y-coordinate

    crop_to_square(input_image_path, output_image_path, top_left_x, top_left_y)


"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"
import { toast } from 'react-hot-toast';


export function AddProductForm() {

    const [productName, setProductName] = useState<string>('');
    const [productPrice, setProductPrice] = useState<number>(0);
    const [productQuantity, setProductQuantity] = useState<number>(0);
    const [productPictures, setProductPictures] = useState<File[]>([]);
    const [previewPicturesUrls, setPreviewPicturesUrls] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
  
    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const files = Array.from(event.target.files || []);
      setProductPictures(files);

      const urls = files.map(file => URL.createObjectURL(file));

      setPreviewPicturesUrls(urls);
    };
  
    const clearAllStateData = () => {
      setProductName('');
      setProductPrice(0);
      setProductQuantity(0);
      setProductPictures([]);
      setPreviewPicturesUrls([]);
    }

    const uploadToCloudinary = async (file: File): Promise<string> => {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'gapchap');
      data.append('cloud_name', 'dfd5b7gfr');
      const response = await fetch('https://api.cloudinary.com/v1_1/dfd5b7gfr/image/upload', {
        method: 'post',
        body: data,
      });
      const result = await response.json();
      return result.url;
    };
  
    const handleSubmit = async (event: FormEvent): Promise<void> => {
      event.preventDefault();
      setLoading(true);
  
      if(productName === '' || productPrice <= 0 || productQuantity <= 0){
        toast.error('Please fill all fields.');
        setLoading(false);
        return;
      }

      try {
        if (productPictures.length < 1 || productPictures.length > 6) {
          toast.error('Please upload between 1 and 6 pictures.');
          setLoading(false);
          return;
        }
  
        const pictureUploadPromises = productPictures.map(uploadToCloudinary);
        const pictureUrls = await Promise.all(pictureUploadPromises);
  
        const formData = {
          name: productName,
          price: productPrice,
          quantity: productQuantity,
          userId: '6660a631631322d2b5805ad5', 
          pictures: pictureUrls, 
        };
  
        const response = await axios.post('http://www.localhost:5000/api/product/add', formData);
        
        if (response.data && response.data){
          toast.success('Product added successfully');
          clearAllStateData()
        }else{
          toast.error('Something went wrong. Please try again.');
        }


      } catch (error) {
        toast.error('Something went wrong. Please try again.');
    };
    setLoading(false);
    }

    return (
        <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name:</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">Product Price:</label>
              <input
                type="number"
                id="productPrice"
                value={productPrice}
                onChange={(event) => setProductPrice(event.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="productQuantity" className="block text-sm font-medium text-gray-700">Product Quantity:</label>
              <input
                type="number"
                id="productQuantity"
                value={productQuantity}
                onChange={(event) => setProductQuantity(event.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="productPictures" className="block text-sm font-medium text-gray-700">Upload Pictures:</label>
              <input
                type="file"
                id="productPictures"
                multiple
                accept="image/*"
                onChange={handleFileInputChange}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
              />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-4">
            {previewPicturesUrls.map((url, index) => (
              <img
                  key={index}
                  src={url}
                  alt={`Uploaded ${index}`}
                  style={{ maxWidth: '75px', maxHeight: '75px', margin: '5px' }}
              />
          ))}

            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    )
}

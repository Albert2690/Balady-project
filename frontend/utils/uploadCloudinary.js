const cloudName = 'dyol3ss07';
const uploadPreset = 'balady_preset';
const apiKey = 196373885819599;

const uploadImageCloudinary = async (file) => {
    const uploadData = new FormData();
console.log(cloudName,'bkkkio')
    uploadData.append('file', file);
    uploadData.append('upload_preset', uploadPreset);

    try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: uploadData,
           
        });

        if (!res.ok) {
            throw new Error(`Error uploading image: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Upload failed:', error.message);
        throw error;
    }
};

export default uploadImageCloudinary;
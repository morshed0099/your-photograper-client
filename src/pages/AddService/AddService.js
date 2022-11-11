import { Button, Card, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const AddService = () => {
    const hadelAddService=(event)=>{
      event.preventDefault();
      const form =event.target;
      const service_name=form.service.value;
      const decription=form.decription.value;
      const image=form.image.value;
      const price=form.price.value;
      const ratings=form.ratings.value;
      const myDate=new Date()
      
      const services={
        service_name:service_name,
        decription:decription,
        image:image,
        price:price,
        ratings:ratings,
        myDate,       
      }  
      fetch('http://localhost:5000/services', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(services)
    })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                alert('comment posted');
            }
            form.reset();
        }) 
        .catch(error=>{
            console.log(error)
        })
     }
    //   fetch('http://localhost:5000/serv',{
    //     method:'POST',
    //     headers:{"content-type":"application/json"},
    //     body:JSON.stringify(services)
    //   })
    //   .then(res=>res.json())
    //   .then(data=>{
    //     form.reset()
    //     alert('data insert okey')
    //   })
    // }
    return (
        <div>
            <div className="max-w-sm">
                <Card>
                    <form onSubmit={hadelAddService} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="service_name"
                                    value="service_name"
                                />                               
                            </div>
                            <TextInput                                
                                type="text"
                                placeholder="service name"
                                name='service'
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="decription"
                                    value="decription"
                                />
                            </div>
                            <Textarea
                                id="decription"
                                type="text"
                                name="decription"
                                placeholder='type description'
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="image"
                                    value="image"
                                />
                            </div>
                            <TextInput
                                id="image"
                                type="text"
                                name="image"
                                placeholder='set image url'
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="price"
                                    value="price"
                                />
                            </div>
                            <TextInput
                                id="price"
                                type="price"
                                name="price"
                                placeholder='set price'
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="ratings"
                                    value="ratings"
                                />
                            </div>
                            <TextInput
                                id="ratings"
                                type="ratings"
                                name="ratings"
                                placeholder='set ratings'
                                required={true}
                            />
                        </div>

                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddService;
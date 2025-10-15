"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SimpleModal } from "@/components/ui/SimpleModal";
import { Paperclip } from "lucide-react";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setModalOpen(true);
  }

  function handleGoToFeed() {
    setModalOpen(false);
    window.location.href = "/";
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-full flex flex-col items-center">
  <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-8">
         
          <div className="w-full flex flex-col items-center">
            <div className="w-full h-72 bg-muted border rounded-lg flex flex-col items-center justify-center mb-8">
              {image ? (
                <Image src={image} alt="Preview" className="w-full h-72 object-cover rounded-lg" width={800} height={288} style={{ objectFit: 'cover', borderRadius: '0.5rem' }} />
              ) : (
                <>
                  <div className="flex flex-col items-center mb-4">
                    <span className="text-lg text-muted-foreground">Adicione uma imagem de capa ao seu post.</span>
                  </div>
                  <label htmlFor="image-upload">
                    <span className="inline-flex items-center px-6 py-2 border rounded-full bg-background text-base font-medium cursor-pointer hover:bg-accent transition">
                      <Paperclip size={20} className="mr-2" />
                      Carregar do computador
                    </span>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </>
              )}
            </div>
          </div>
    
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            className="text-4xl font-bold border-0 border-b border-gray-300 rounded-none px-0 focus:ring-0 focus:border-gray-400 focus:bg-transparent text-gray-600 transition-all"
            required
          />
         
          <textarea
            value={body}
            onChange={e => {
              setBody(e.target.value);
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
            placeholder="Escreva aqui."
            className="resize-none min-h-[120px] w-full border-0 border-b border-gray-300 rounded-none px-0 py-2 focus:ring-0 focus:border-gray-400 focus:bg-transparent text-lg text-gray-600 bg-transparent transition-all overflow-hidden"
            rows={3}
            required
          />
          <Button type="submit" className="self-end mt-4">Criar Post</Button>
        </form>
      </div>
      <SimpleModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Post criado!"
        description={`Título: ${title}\nConteúdo: ${body}`}
        onConfirm={handleGoToFeed}
      />
    </div>
  );
}

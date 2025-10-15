"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

export function SimpleModal({ open, onClose, title, description, onConfirm }: {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onConfirm: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        <DialogFooter>
          <button onClick={onConfirm} className="bg-gray-600 text-white px-4 py-2 rounded mr-2">Ver feed</button>
          <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded">Fechar</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

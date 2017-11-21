//items.index.js

'use strict';

class Item{

	struct(itemNameTicket, itemRareTicket){
		if(itemNameTicket >= 0 && itemNameTicket <= 40){
			this.itemName = "Shoes";
			this.imageUrl = imageShoes;
		}
		else if(itemNameTicket > 40 && itemNameTicket <= 70){
			this.itemName = "Jacket";
			this.imageUrl = imageJacket;
		}
		else if(itemNameTicket > 70 && itemNameTicket <= 90){
			this.itemName = "Pants";
			this.imageUrl = imagePants;
		}
		else if (itemNameTicket > 90 && itemNameTicket <= 100){
			this.itemName = "Сloak";
			this.imageUrl = imageCloak;
		}

		switch(itemRareTicket){
			case 1:
			this.itemRareValue = "Gray";
			break;
			case 2: 
			this.itemRareValue = "Blue";
			break;
			case 3: 
			this.itemRareValue= "Green";
			break;
			case 4: 
			this.itemRareValue = "Purpule";
			break;
			case 5: 
			this.itemRareValue = "Red";
			break;
		}

    getItemName(){
        return this.itemName;
    }

    setItemName(newItemName){
        this.itemName = newItemName;
    }

    getItemRareValue(){
        return this.itemRareValue;
    }

    setItemRareValue(newItemRareValue){
        this.itemRareValue = newItemRareValue;
    }

    getImageUrl(){
        return this.imageUrl;
    }

    setImageUrl(newImageUrl){
        this.imageUrl = newImageUrl;
    }
}
	}
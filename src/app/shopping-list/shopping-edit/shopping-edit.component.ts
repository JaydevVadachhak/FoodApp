import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {IngredientModel} from "../../shared/model/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('form') shoppingListForm!: NgForm;
  editedItem!: IngredientModel;
  subscription!: Subscription;
  editMode: boolean = false;
  editedItemIndex!: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.editedItemIndex = index;
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onAddItem(form: NgForm) {
    const newIngredient = new IngredientModel(form.value.name, form.value.amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.shoppingListForm.resetForm();
    this.editMode = false;
  }

  onDeleteItem() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.shoppingListForm.resetForm();
    this.editMode = false;
  }

  onClearForm() {
    this.shoppingListForm.resetForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

﻿CKEDITOR.dialog.add('renamefolderDialog', function (editor) {
    return {
        title: "Rename Folder",
        editorId: editor.id,
        minWidth: 200,
        minHeight: 60,
        resizable: false,
        contents: [
            {
                id: 'tab0',
                label: '',
                title: '',
                elements: [
                    {
                        type: 'text',
                        id: 'folderNameId',
                        label: 'New Folder Name',
                        validate: function () {
                            if (!this.getValue()) {
                                // folder name cannot be blank
                                return false;
                            }
                        }
                    }
                ]
            }
        ],
        onOk: function (eventParam) {
            var foldersControlId = 'file-browser-folder-tree_' + eventParam.sender.definition.editorId;
            var foldersRockTree = $('#' + foldersControlId).find('.treeview').data('rockTree');
            var selectedFolderPath = foldersRockTree.$el.find('.selected').closest('.rocktree-item').attr('data-id');
            var newFolderName = this.getValueOf('tab0', 'folderNameId');
            var newFolderPath = selectedFolderPath.substring(0, selectedFolderPath.lastIndexOf('\\')) + "\\" + newFolderName;
            var restUrl = Rock.settings.get('baseUrl') + 'api/FileBrowser/RenameFolder' 
                + '?origRelativeFolderPath=' + encodeURIComponent(selectedFolderPath)
                + '&newRelativeFolderPath=' + encodeURIComponent(newFolderPath);
            return $.ajax({
                type: 'POST',
                url: restUrl,
                context: {
                    Editor: editor,
                    FoldersControlId: foldersControlId,
                    FolderPath: newFolderPath
                }
            }).done(function (data, textStatus, jqXHR) {
                // refresh the folder itempicker
                this.Editor.execCommand("refreshFolderTree", { controlId: this.FoldersControlId, selectedFolder: this.FolderPath });
            });
        }
    }
});
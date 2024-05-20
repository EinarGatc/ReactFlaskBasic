import json
import os

def get_data_from_json(json_file) -> str:
    with open(json_file, 'rb') as file:
        data = json.load(file)
    return data

def get_documents(folder_path, flag = True, file_count = 10):
    documents = []
    for root, _, files in os.walk(folder_path):
        if flag and len(documents) > file_count:
            break
        for filename in files:
            if flag and len(documents) > file_count:
                break
            documents.append(os.path.join(root, filename))
    return documents

